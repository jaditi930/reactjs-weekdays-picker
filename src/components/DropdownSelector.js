import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => `max(${props.width || '150px'}, 150px)`};  /* Set max width */
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;  /* Ensure full width of the Wrapper */
  box-sizing: border-box;  /* Include padding and border in the width */
  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  font-style: ${props => props.fontStyle || 'normal'};
  color: ${props => props.inputTextColor || '#000'};  /* Color for input text */
   /* Handle text overflow */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Popup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  width: 100%;  /* Ensure full width of the Wrapper */
  box-sizing: border-box;  /* Include padding and border in the width */
  z-index: 1000;
`;

const Item = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  background: ${props => props.selected ? props.selectedColor : props.unselectedColor};
  color: ${props => props.selected ? props.selectedTextColor : props.unselectedTextColor};

  &:hover {
    background: ${props => props.selected ? props.selectedHoverColor : props.unselectedHoverColor};
  }
`;

const DropdownSelector = ({
  multiple,
  dayList,
  state,
  setState,
  onDayChange,
  selectedColor,
  unselectedColor,
  selectedHoverColor,
  unselectedHoverColor,
  width,
  fontSize,
  fontWeight,
  fontStyle,
  selectedTextColor,
  unselectedTextColor,
  inputTextColor,
  placeholder
}) => {
  const [selectedDays, setSelectedDays] = useState(state || []);
  const [showPopup, setShowPopup] = useState(false);
  const wrapperRef = useRef(null);

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

  const handleInputClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef} width={width}>
      <Input
        type="text"
        readOnly
        value={selectedDays.join(', ')}
        onClick={handleInputClick}
        placeholder={placeholder}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        inputTextColor={inputTextColor}
      />
      {showPopup && (
        <Popup width={width}>
          {dayList.map((day, index) => (
            <Item
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
              {day}
            </Item>
          ))}
        </Popup>
      )}
    </Wrapper>
  );
};

DropdownSelector.propTypes = {
  multiple: PropTypes.bool,
  dayList: PropTypes.arrayOf(PropTypes.string),
  state: PropTypes.arrayOf(PropTypes.string),
  setState: PropTypes.func,
  onDayChange: PropTypes.func,
  selectedColor: PropTypes.string,
  unselectedColor: PropTypes.string,
  selectedHoverColor: PropTypes.string,
  unselectedHoverColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  selectedTextColor: PropTypes.string,
  unselectedTextColor: PropTypes.string,
  inputTextColor: PropTypes.string,
  placeholder: PropTypes.string
};

DropdownSelector.defaultProps = {
  multiple: false,
  dayList: defaultDaysOfWeek,
  selectedColor: '#007bff',
  unselectedColor: '#d3d3d3',
  selectedHoverColor: '#0056b3',
  unselectedHoverColor: '#f0f0f0',
  width: '150px',
  fontSize: '16px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  selectedTextColor: '#fff',
  unselectedTextColor: '#000',
  inputTextColor: '#000',
  placeholder: 'Select days',
};

export default DropdownSelector;
