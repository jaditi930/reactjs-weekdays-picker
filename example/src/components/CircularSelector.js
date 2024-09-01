import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  /* Ensure cursor changes to pointer on hover */
  .plotly .hoverlayer, .plotly .pie, .plotly .slice {
    cursor: pointer;
  }
`;

const CircularDayPicker = ({
  multiple,
  dayList,
  state,
  setState,
  onDayChange,
  selectedColor,
  unselectedColor,
  selectedHoverColor,
  unselectedHoverColor,
  size,
  fontSize,
  fontWeight,
  fontStyle,
  selectedTextColor,
  unselectedTextColor,
}) => {
  // Use internal state if state and setState are not provided
  const [selectedDays, setSelectedDays] = useState(state || []);
  const [isChartReady, setIsChartReady] = useState(false);

  const config = useMemo(() => ({
    displayModeBar: false, // Hides the mode bar entirely
    displaylogo: false, // Hides the Plotly logo
    modeBarButtonsToRemove: ['toImage'], // Removes the "Download as PNG" button
  }), []);

  const layout = useMemo(() => ({
    height: size,  // Ensure height is the same as width
    width: size,   // Ensure width is applied
    margin: { t: 0, b: 0, l: 0, r: 0 },
    showlegend: false,
    font: {
      size: (parseFloat(fontSize)),
      color: selectedTextColor,
      family: 'Arial, sans-serif',
      weight: fontWeight,
      style: fontStyle
    }
  }), [size, fontSize, fontWeight, fontStyle, selectedTextColor]);

  const toggleDay = useCallback((clickedDay) => {
    setSelectedDays(prevSelectedDays => {
      const currentDays = state || prevSelectedDays;
      let updatedDays;
      if (multiple) {
        if (currentDays.includes(clickedDay)) {
          updatedDays = currentDays.filter(day => day !== clickedDay);
        } else {
          updatedDays = [...currentDays, clickedDay];
        }
      } else {
        updatedDays = currentDays.includes(clickedDay) ? [] : [clickedDay];
      }

      if (setState) {
        setState(updatedDays);
      } else {
        setSelectedDays(updatedDays);
      }

      if (onDayChange) {
        onDayChange(updatedDays);
      }

      return updatedDays;
    });
  }, [multiple, state, setState, onDayChange]);

  const pieData = useMemo(() => [{
    type: "pie",
    values: Array(dayList.length).fill(1), // All slices have equal value
    labels: dayList,
    textinfo: "label",
    textposition: "inside",
    automargin: true,
    marker: {
      colors: dayList.map(day => (state || selectedDays).includes(day) ? selectedColor : unselectedColor) // Selected days in specified color, others in specified color
    },
    hoverinfo: "label",
    hoverlabel: {
      bgcolor: dayList.map(day => (state || selectedDays).includes(day) ? selectedHoverColor : unselectedHoverColor)
    },
    insidetextfont: {
      color: dayList.map(day => (state || selectedDays).includes(day) ? selectedTextColor : unselectedTextColor),
    },
  }], [selectedDays, state, selectedColor, unselectedColor, selectedHoverColor, unselectedHoverColor, dayList]);

  const handleClick = useCallback((data) => {
    if (data.points.length > 0) {
      const clickedDay = data.points[0].label;
      toggleDay(clickedDay);
    } else {
      console.warn('No points clicked');
    } 
  }, [toggleDay]);

  useEffect(() => {
    setIsChartReady(true);
    return () => setIsChartReady(false); // Cleanup on unmount
  }, []);

  return (
    <Container>
      {isChartReady && pieData.length > 0 && (
        <Plot
          data={pieData}
          layout={layout}
          config={config}
          onClick={handleClick}
          aria-label="Circular day selector"
        />
      )}
    </Container>
  );
};

CircularDayPicker.propTypes = {
  multiple: PropTypes.bool,
  dayList: PropTypes.arrayOf(PropTypes.string),
  state: PropTypes.arrayOf(PropTypes.string),
  setState: PropTypes.func,
  onDayChange: PropTypes.func,
  selectedColor: PropTypes.string,
  unselectedColor: PropTypes.string,
  selectedHoverColor: PropTypes.string,
  unselectedHoverColor: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.string,
  selectedTextColor: PropTypes.string,
  unselectedTextColor: PropTypes.string,
};

CircularDayPicker.defaultProps = {
  multiple: false,
  dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  state: null,
  setState: null,
  onDayChange: null,
  selectedColor: '#007bff',
  unselectedColor: '#d3d3d3',
  selectedHoverColor: '#0056b3',
  unselectedHoverColor: '#f0f0f0',
  size: 300,
  fontSize: '14px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  selectedTextColor: '#fff',
  unselectedTextColor: '#000',
};

export default CircularDayPicker;
