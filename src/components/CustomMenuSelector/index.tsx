

import React, { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const defaultIcons: Record<string, string> = {
  Sun: "🌞",
  Mon: "🌛",
  Tue: "🌮",
  Wed: "🍹",
  Thu: "🎉",
  Fri: "🍻",
  Sat: "🎨",
};

export interface CustomMenuSelectorProps {
  dayList?: string[];
  state?: string[];
  setState?: (days: string[]) => void;
  onDayChange?: (days: string[]) => void;

  selectedColor?: string;
  unselectedColor?: string;
  selectedHoverColor?: string;
  unselectedHoverColor?: string;

  width?: string | number;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;

  selectedTextColor?: string;
  unselectedTextColor?: string;
  inputTextColor?: string;
  placeholder?: string;

  multiple?: boolean;
  iconAlign?: "top" | "bottom" | "left" | "right";
  displayOption?: "icon" | "word" | "both";
  showIcons?: boolean;
  showTicks?: boolean;
  excludeDays?: string[];

  tickOrder?: number;
  dayOrder?: number;
  iconOrder?: number;
}

const CustomMenuSelector: React.FC<CustomMenuSelectorProps> = ({
  dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  state = [],
  setState,
  onDayChange,

  selectedColor = "#007bff",
  unselectedColor = "#ffffff",
  selectedHoverColor = "#0056b3",
  unselectedHoverColor = "#f0f0f0",

  width = "auto",
  fontSize = "16px",
  fontWeight = "normal",
  fontStyle = "normal",

  selectedTextColor = "#ffffff",
  unselectedTextColor = "#333333",
  inputTextColor = "#000000",
  placeholder = "Select days",

  multiple = false,
  iconAlign = "right",
  displayOption = "both",
  showIcons = true,
  showTicks = true,
  excludeDays = [],

  tickOrder = 3,
  dayOrder = 2,
  iconOrder = 1,

  style,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>(state);
  const [menuPosition, setMenuPosition] = useState({
    top: "auto",
    left: "auto",
    right: "auto",
    flexDirection: "row" as "row" | "row-reverse" | "column" | "column-reverse",
  });

  const menuRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const icons = { ...defaultIcons };

  const toggleDay = (day: string) => {
    let updatedDays: string[];
    if (selectedDays.includes(day)) {
      updatedDays = selectedDays.filter((d) => d !== day);
    } else {
      updatedDays = multiple ? [...selectedDays, day] : [day];
    }
    setSelectedDays(updatedDays);
    setState?.(updatedDays);
    onDayChange?.(updatedDays);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  function getMenuDimensions() {
    if (!menuRef.current) return { width: 0, height: 0 };
    const originalDisplay = menuRef.current.style.display;
    menuRef.current.style.display = "flex";
    const rect = menuRef.current.getBoundingClientRect();
    menuRef.current.style.display = originalDisplay;
    return { width: rect.width, height: rect.height };
  }

  const handleMenuPosition = () => {
    if (inputRef.current && menuRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const { width } = getMenuDimensions();

      if (inputRect.left + width <= viewportWidth) {
        setMenuPosition((prev) => ({ ...prev, left: "0" }));
      } else if (viewportWidth - inputRect.right + width <= viewportWidth) {
        setMenuPosition((prev) => ({
          ...prev,
          right: "0",
          flexDirection: "row-reverse",
        }));
      } else if (width + 20 <= viewportWidth) {
        setMenuPosition((prev) => ({
          ...prev,
          right: `-${viewportWidth - inputRect.right - 10}px`,
        }));
      } else {
        setMenuPosition((prev) => ({
          ...prev,
          left: "0",
          right: "0",
          flexDirection: "column",
        }));
      }
    }
  };

  useEffect(() => {
    handleMenuPosition();
  }, []);

  useEffect(() => {
    if (inputRef.current && menuRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const { height } = getMenuDimensions();

      if (inputRect.bottom + height > viewportHeight) {
        setMenuPosition((prev) => ({
          ...prev,
          top: `-${height}px`,
          flexDirection: "column-reverse",
        }));
      }
    }
  }, [menuPosition.left, menuPosition.right]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-selector-wrapper">
      <input
        ref={inputRef}
        readOnly
        value={selectedDays.join(", ")}
        onClick={() => !showMenu && setShowMenu(true)}
        placeholder={placeholder}
        style={{
          padding: "10px",
          fontSize,
          fontWeight,
          fontStyle,
          color: inputTextColor,
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      />
      <div
        ref={menuRef}
        className="menu-selector-dropdown"
        style={{
          display: showMenu ? "flex" : "none",
          flexDirection: menuPosition.flexDirection,
          position: "absolute",
          width,
          top: menuPosition.top,
          left: menuPosition.left,
          right: menuPosition.right,
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          zIndex: 1000,
        }}
      >
        {dayList.map((day, index) => {
          if (excludeDays.includes(day)) return null;
          const isSelected = selectedDays.includes(day);
          return (
            <button
              key={index}
              onClick={() => toggleDay(day)}
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: isSelected ? selectedColor : unselectedColor,
                color: isSelected ? selectedTextColor : unselectedTextColor,
                border: "none",
                cursor: "pointer",
                fontSize,
                fontWeight,
                fontStyle,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  isSelected ? selectedHoverColor : unselectedHoverColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  isSelected ? selectedColor : unselectedColor;
              }}
            >
              {showIcons && displayOption !== "word" && (
                <span style={{ order: iconOrder, margin: "0 4px" }}>
                  {icons[day]}
                </span>
              )}
              {displayOption !== "icon" && (
                <span style={{ order: dayOrder }}>{day}</span>
              )}
              {showTicks && (
                <FaCheck
                  style={{
                    order: tickOrder,
                    visibility: isSelected ? "visible" : "hidden",
                    margin: "0 4px",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomMenuSelector;
