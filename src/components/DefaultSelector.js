import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CircleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;  /* Allow circles to wrap to the next line */
  justify-content: space-between;
  gap: 10px;  /* Space between circles */
  width: ${props => props.width || '100%'};
  padding: 10px;
  box-sizing: border-box;  /* Ensure padding is included in the width */
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.selected ? props.selectedColor : props.unselectedColor};
  color: ${props => props.selected ? props.selectedTextColor : props.unselectedTextColor};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.selected ? props.selectedHoverColor : props.unselectedHoverColor};
  }
`;

const DefaultSelector = ({
  multiple,
  dayList,
  state,
  setState,
  onDayChange,
  selectedColor,
  unselectedColor,
  selectedHoverColor,
  unselectedHoverColor,
  selectedTextColor,
  unselectedTextColor,
  width,
  displayLength,  // New prop to control the display length of day names
}) => {
  const [selectedDays, setSelectedDays] = useState(state || []);

  const toggleDay = (day) => {
    let updatedDays;
    if (multiple) {
      if (selectedDays.includes(day)) {
        updatedDays = selectedDays.filter(d => d !== day);
      } else {
        updatedDays = [...selectedDays, day];
      }
    } else {
      updatedDays = [day];
    }
    setSelectedDays(updatedDays);
    if (setState) {
      setState(updatedDays);
    }
    if (onDayChange) {
      onDayChange(updatedDays);
    }
  };

  const getDisplayText = (day) => {
    if (displayLength && displayLength > 0) {
      return day.slice(0, displayLength);  // Display the specified number of characters
    }
    return day;  // Display the full day name
  };

  return (
    <CircleWrapper width={width}>
      {dayList.map((day, index) => (
        <Circle
          key={index}
          selected={selectedDays.includes(day)}
          selectedColor={selectedColor}
          unselectedColor={unselectedColor}
          selectedTextColor={selectedTextColor}
          unselectedTextColor={unselectedTextColor}
          selectedHoverColor={selectedHoverColor}
          unselectedHoverColor={unselectedHoverColor}
          onClick={() => toggleDay(day)}
        >
          {getDisplayText(day)}  {/* Display the appropriate number of characters */}
        </Circle>
      ))}
    </CircleWrapper>
  );
};

DefaultSelector.propTypes = {
  multiple: PropTypes.bool,
  dayList: PropTypes.arrayOf(PropTypes.string),
  state: PropTypes.arrayOf(PropTypes.string),
  setState: PropTypes.func,
  onDayChange: PropTypes.func,
  selectedColor: PropTypes.string,
  unselectedColor: PropTypes.string,
  selectedHoverColor: PropTypes.string,
  unselectedHoverColor: PropTypes.string,
  selectedTextColor: PropTypes.string,
  unselectedTextColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  displayLength: PropTypes.number,  // PropType for the new displayLength prop
};

DefaultSelector.defaultProps = {
  multiple: false,
  dayList: defaultDaysOfWeek,
  selectedColor: '#007bff',
  unselectedColor: '#d3d3d3',
  selectedHoverColor: '#0056b3',
  unselectedHoverColor: '#f0f0f0',
  selectedTextColor: '#fff',
  unselectedTextColor: '#000',
  width: '200px',  /* Set a default width to constrain the circles */
  displayLength: 1,  // Default to show the first letter of each day
};

export default DefaultSelector;
