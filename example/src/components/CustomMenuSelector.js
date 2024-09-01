import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

// Default icons for each day
const defaultIcons = {
  Sun: "🌞",
  Mon: "🌛",
  Tue: "🌮",
  Wed: "🍹",
  Thu: "🎉",
  Fri: "🍻",
  Sat: "🎨",
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  padding: 10px;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.inputTextColor};
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.selectedColor};
  }
`;

const Menu = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: ${(props) => props.flexDirection};
  position: absolute;
  width:${(props) => props.width}
  max-width: ${(props) => props.maxWidth};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const DayText = styled.div`
  order: ${(props) => props.order};
  margin-right: ${(props) => (props.order < 3 ? "0.5rem" : "")};
  margin-left: ${(props) => (props.order > 1 ? "0.5rem" : "")};
`;

const alignmentStyles = {
  top: css`
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    svg {
      margin: 4px 0 0 0;
    }
  `,
  bottom: css`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 0 4px 0;
    }
  `,
  left: css`
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 4px 0 0;
    }
  `,
  right: css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 0 0 4px;
    }
  `,
};

const DayButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: ${(props) =>
    props.selected ? props.selectedColor : props.unselectedColor};
  color: ${(props) =>
    props.selected ? props.selectedTextColor : props.unselectedTextColor};
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  ${(props) => alignmentStyles[props.align]}

  &:hover {
    background-color: ${(props) =>
      props.selected ? props.selectedHoverColor : props.unselectedHoverColor};
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.span`
  display: flex;
  margin-right: ${(props) => (props.order < 3 ? "0.5rem" : "")};
  margin-left: ${(props) => (props.order > 1 ? "0.5rem" : "")};
  order: ${(props) => props.order};
`;

const IconWithTick = styled(FaCheck)`
  margin-right: ${(props) => (props.order < 3 ? "0.5rem" : "")};
  margin-left: ${(props) => (props.order > 1 ? "0.5rem" : "")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  order: ${(props) => props.order};
`;

const CustomMenuSelector = ({
  dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  state,
  setState,
  onDayChange,
  selectedColor = "#007bff",
  unselectedColor = "#ffffff",
  selectedHoverColor = "#0056b3",
  unselectedHoverColor = "#f0f0f0",
  width = "auto",
  fontSize = "16px",
  fontWeight = "normal",
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
  iconOrder = 1,
  dayOrder = 2,
  tickOrder = 3,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedDays, setSelectedDays] = useState(state || []);
  const [menuPosition, setMenuPosition] = useState({
    top: "auto",
    left: "auto",
    right: "auto",
    flexDirection: "row",
  });

  const menuRef = useRef(null);
  const inputRef = useRef(null);

  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const icons = { ...defaultIcons };

  const toggleDay = (day) => {
    let updatedDays;
    if (selectedDays.includes(day)) {
      updatedDays = selectedDays.filter((d) => d !== day);
    } else {
      if (multiple) {
        updatedDays = [...selectedDays, day];
      } else {
        updatedDays = [day];
      }
    }
    setSelectedDays(updatedDays);
    if (setState) {
      setState(updatedDays);
    }
    if (onDayChange) {
      onDayChange(updatedDays);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  function getMenuDimensions() {
    // Store the original display property
    const originalDisplay = menuRef.current.style.display;

    // Temporarily show the element
    menuRef.current.style.display = "flex";

    // Measure the dimensions
    const rect = menuRef.current.getBoundingClientRect();

    // Restore the original display property
    menuRef.current.style.display = originalDisplay;

    return { width: rect.width, height: rect.height };
  }

  const handleMenuPosition = () => {
    if (inputRef.current && menuRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const { width, height } = getMenuDimensions();

      // Check for space on the rigt, left or viewport
      if (inputRect.left + width <= viewportWidth) {
        setMenuPosition({ ...menuPosition, left: 0 });
        console.log("right");
      } else if (viewportWidth - inputRect.right + width <= viewportWidth) {
        setMenuPosition({
          ...menuPosition,
          right: 0,

          flexDirection: "row-reverse",
        });
        console.log("left");
      } else if (width + 20 <= viewportWidth) {
        setMenuPosition({
          ...menuPosition,
          right: `-${viewportWidth - inputRect.right - 10}px`,
        });
        console.log("centered");
      } else {
        setMenuPosition({
          ...menuPosition,
          left: 0,
          right: 0,
          flexDirection: "column",
        });
        console.log("vertical");
      }
    }
  };

  useEffect(() => {
    handleMenuPosition();
  }, []);

  useEffect(() => {
    if (inputRef.current && menuRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const { width, height } = getMenuDimensions();

      // console.log(inputRect.top, height, viewportHeight);

      // Check for space below
      if (inputRect.bottom + height > viewportHeight) {
        setMenuPosition({
          ...menuPosition,
          top: `-${height}px`,
          flexDirection: "column-reverse",
        });
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
    <Wrapper>
      <Input
        ref={inputRef}
        readOnly
        value={selectedDays.join(", ")}
        onClick={() => {
          if (!showMenu) setShowMenu(true);
        }}
        placeholder={placeholder}
        fontSize={fontSize}
        inputTextColor={inputTextColor}
        selectedColor={selectedColor}
      />
      {/* <p>{menuPosition}</p> */}
      <Menu
        show={showMenu}
        width={width}
        top={menuPosition.top}
        left={menuPosition.left}
        right={menuPosition.right}
        bottom={menuPosition.bottom}
        ref={menuRef}
        flexDirection={menuPosition.flexDirection}
      >
        {dayList.map((day, index) => {
          if (excludeDays.includes(day)) return null;
          return (
            <DayButton
              key={index}
              selected={selectedDays.includes(day)}
              onClick={() => toggleDay(day)}
              align={iconAlign}
              selectedColor={selectedColor}
              unselectedColor={unselectedColor}
              fontSize={fontSize}
              fontWeight={fontWeight}
              selectedHoverColor={selectedHoverColor}
              unselectedHoverColor={unselectedHoverColor}
              selectedTextColor={selectedTextColor}
              unselectedTextColor={unselectedTextColor}
            >
              {showIcons && displayOption !== "word" && (
                <Icon order={iconOrder}>{icons[day]}</Icon>
              )}
              <DayText order={dayOrder}>
                {displayOption !== "icon" && day}
              </DayText>
              {showTicks && (
                <IconWithTick
                  visible={selectedDays.includes(day)}
                  order={tickOrder}
                />
              )}
            </DayButton>
          );
        })}
      </Menu>
    </Wrapper>
  );
};

CustomMenuSelector.propTypes = {
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
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
  iconAlign: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  displayOption: PropTypes.oneOf(["icon", "word", "both"]),
  showIcons: PropTypes.bool,
  showTicks: PropTypes.bool,
  excludeDays: PropTypes.arrayOf(PropTypes.string),
  tickOrder: PropTypes.number,
  dayOrder: PropTypes.number,
  iconOrder: PropTypes.number,
};

CustomMenuSelector.defaultProps = {
  dayList: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  state: null,
  setState: null,
  onDayChange: null,
  selectedColor: "#007bff",
  unselectedColor: "#ffffff",
  selectedHoverColor: "#0056b3",
  unselectedHoverColor: "#f0f0f0",
  width: "auto",
  fontSize: "16px",
  fontWeight: "normal",
  fontStyle: "normal",
  selectedTextColor: "#ffffff",
  unselectedTextColor: "#333333",
  inputTextColor: "#000000",
  placeholder: "Select days",
  multiple: false,
  iconAlign: "right",
  displayOption: "both",
  showIcons: true,
  showTicks: true,
  excludeDays: [],
};

export default CustomMenuSelector;
