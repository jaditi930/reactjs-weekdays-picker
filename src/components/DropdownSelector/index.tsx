import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const defaultDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export interface DropdownSelectorProps {
  multiple?: boolean;
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
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  multiple = false,
  dayList = defaultDaysOfWeek,
  state = [],
  setState,
  onDayChange,
  selectedColor = "#007bff",
  unselectedColor = "#d3d3d3",
  selectedHoverColor = "#0056b3",
  unselectedHoverColor = "#f0f0f0",
  width = "150px",
  fontSize = "16px",
  fontWeight = "normal",
  fontStyle = "normal",
  selectedTextColor = "#fff",
  unselectedTextColor = "#000",
  inputTextColor = "#000",
  placeholder = "Select days",
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(state);
  const [showPopup, setShowPopup] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const toggleDay = (day: string) => {
    let updatedDays: string[];
    if (multiple) {
      if (selectedDays.includes(day)) {
        updatedDays = selectedDays.filter((d) => d !== day);
      } else {
        updatedDays = [...selectedDays, day];
      }
    } else {
      updatedDays = [day];
    }
    setSelectedDays(updatedDays);
    setState?.(updatedDays);
    onDayChange?.(updatedDays);
  };

  const handleInputClick = () => setShowPopup((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="wrapper"
      style={{ width: typeof width === "number" ? `${width}px` : width }}
      ref={wrapperRef}
    >
      <input
        type="text"
        readOnly
        value={selectedDays.join(", ")}
        onClick={handleInputClick}
        placeholder={placeholder}
        className="input"
        style={{ fontSize, fontWeight, fontStyle, color: inputTextColor }}
      />
      {showPopup && (
        <div className="popup">
          {dayList.map((day, index) => {
            const isSelected = selectedDays.includes(day);
            return (
              <div
                key={index}
                className="item"
                style={{
                  background: isSelected ? selectedColor : unselectedColor,
                  color: isSelected ? selectedTextColor : unselectedTextColor,
                }}
                onClick={() => toggleDay(day)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = isSelected
                    ? selectedHoverColor
                    : unselectedHoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = isSelected
                    ? selectedColor
                    : unselectedColor)
                }
              >
                {day}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;
