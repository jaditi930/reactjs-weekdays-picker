import React, { useState, useEffect, useRef } from "react";
import { DropdownSelectorProps } from "./types";
import { defaultDaysOfWeek } from "./constants";
import "./styles.css";

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  multiple = false,
  dayList = defaultDaysOfWeek,
  state,
  setState,
  onDayChange,
  selectedColor = "#007bff",
  unselectedColor = "#d3d3d3",
  selectedHoverColor = "#0056b3",
  unselectedHoverColor = "#f0f0f0",
  width = "150px",
  fontSize = "16px",
  fontWeight = "400",
  fontStyle = "normal",
  selectedTextColor = "#fff",
  unselectedTextColor = "#000",
  inputTextColor = "#000",
  placeholder = "Select days",
  inputBgColor = "#fff",
  // advance styling
  inputBoxStyle = {},
  dropdownContainerStyle = {},
  dropdownItemStyle = {},
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(state || []);
  const [showPopup, setShowPopup] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const toggleDay = (day: string) => {
    let updatedDays: string[];
    if (multiple) {
      updatedDays = selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day];
    } else {
      updatedDays = [day];
    }
    setSelectedDays(updatedDays);
    setState?.(updatedDays);
    onDayChange?.(updatedDays);
  };

  const handleInputClick = () => setShowPopup(!showPopup);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="dropdown-wrapper"
      style={{ width: `max(${width}, 150px)` }}
    >
      <input
        type="text"
        readOnly
        value={selectedDays.join(", ")}
        onClick={handleInputClick}
        placeholder={placeholder}
        className="dropdown-input"
        style={{
          fontSize,
          fontWeight,
          fontStyle,
          color: inputTextColor,
          backgroundColor: inputBgColor,
          ...inputBoxStyle,
        }}
      />

      {showPopup && (
        <div
          className="dropdown-popup"
          style={{ width: "100%", ...dropdownContainerStyle }}
        >
          {dayList.map((day, index) => {
            const isSelected = selectedDays.includes(day);
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => toggleDay(day)}
                style={{
                  backgroundColor: isSelected ? selectedColor : unselectedColor,
                  color: isSelected ? selectedTextColor : unselectedTextColor,
                  ...dropdownItemStyle,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = isSelected
                    ? selectedHoverColor
                    : unselectedHoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = isSelected
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
