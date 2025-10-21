import React, { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { CustomMenuSelectorProps } from "./types";
import { defaultIcons } from "./constants";
import "./styles.css";

interface MenuPosition {
  top: string;
  left: string;
  right: string;
  bottom: string;
  flexDirection: React.CSSProperties["flexDirection"];
}

const CustomMenuSelector: React.FC<CustomMenuSelectorProps> = ({
  dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  state = null,
  setState = null,
  onDayChange = null,
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
  inputBgColor = "#fff",
  // advance styling
  inputBoxStyle = {},
  dropdownContainerStyle = {},
  dropdownItemStyle = {},
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>(state || []);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    flexDirection: "row",
  });

  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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
      const { width, height } = getMenuDimensions();

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="cms-wrapper">
      <input
        ref={inputRef}
        readOnly
        className="cms-input"
        value={selectedDays.join(", ")}
        onClick={() => !showMenu && setShowMenu(true)}
        placeholder={placeholder}
        style={{
          fontSize,
          color: inputTextColor,
          borderColor: selectedColor,
          fontWeight,
          fontStyle,
          backgroundColor: inputBgColor,
          ...inputBoxStyle
        }}
      />
      <div
        ref={menuRef}
        className={`cms-menu ${showMenu ? "show" : ""}`}
        style={{
          width,
          top: menuPosition.top,
          left: menuPosition.left,
          right: menuPosition.right,
          bottom: menuPosition.bottom,
          flexDirection: menuPosition.flexDirection,
          ...dropdownContainerStyle
        }}
      >
        {dayList.map((day, index) => {
          if (excludeDays.includes(day)) return null;
          const selected = selectedDays.includes(day);
          return (
            <button
              key={index}
              onClick={() => toggleDay(day)}
              className={`cms-day-button cms-align-${iconAlign}`}
              style={{
                backgroundColor: selected ? selectedColor : unselectedColor,
                color: selected ? selectedTextColor : unselectedTextColor,
                fontSize,
                fontWeight,
                ...dropdownItemStyle
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = selected
                  ? selectedHoverColor
                  : unselectedHoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = selected
                  ? selectedColor
                  : unselectedColor)
              }
            >
              {showIcons && displayOption !== "word" && (
                <span className="cms-icon" style={{ order: iconOrder }}>
                  {icons[day]}
                </span>
              )}
              {displayOption !== "icon" && (
                <span className="cms-day-text" style={{ order: dayOrder }}>
                  {day}
                </span>
              )}
              {showTicks && (
                <FaCheck
                  className="cms-tick"
                  style={{
                    order: tickOrder,
                    visibility: selected ? "visible" : "hidden",
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
