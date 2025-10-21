import React, { useState } from "react";
import { DefaultSelectorProps } from "./types";
import { defaultDaysOfWeek } from "./constants";
import "./styles.css";
const DefaultSelector: React.FC<DefaultSelectorProps> = ({
  multiple = false,
  dayList = defaultDaysOfWeek,
  state = null,
  setState = null,
  onDayChange = null,
  selectedColor = "#007bff",
  unselectedColor = "#d3d3d3",
  selectedHoverColor = "#0056b3",
  unselectedHoverColor = "#f0f0f0",
  selectedTextColor = "#fff",
  unselectedTextColor = "#000",
  width = "200px",
  displayLength = 1,
  fontSize = "16px",
  fontWeight = "400",
  fontStyle = "normal",
  // advance styling
  optionContainerStyle = {},
  optionStyle = {}
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(state || []);

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

  const getDisplayText = (day: string) => {
    return displayLength && displayLength > 0
      ? day.slice(0, displayLength)
      : day;
  };

  return (
    <div className="ds-circle-wrapper" style={{ width, ...optionContainerStyle }}>
      {dayList.map((day, index) => {
        const selected = selectedDays.includes(day);
        return (
          <div
            key={index}
            className="ds-circle"
            onClick={() => toggleDay(day)}
            style={{
              backgroundColor: selected ? selectedColor : unselectedColor,
              color: selected ? selectedTextColor : unselectedTextColor,
              fontSize,
              fontWeight,
              fontStyle,
              ...optionStyle
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = selected
                ? selectedHoverColor
                : unselectedHoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = selected
                ? selectedColor
                : unselectedColor;
            }}
          >
            {getDisplayText(day)}
          </div>
        );
      })}
    </div>
  );
};

export default DefaultSelector;
