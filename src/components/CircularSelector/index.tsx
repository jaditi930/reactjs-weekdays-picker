import React, { useState, useEffect, useMemo, useCallback } from "react";
import Plot from "react-plotly.js";
import { CircularSelectorProps } from "./types";
import { defaultDaysOfWeek } from "./constants";
import "./styles.css";

const CircularSelector: React.FC<CircularSelectorProps> = ({
  multiple = false,
  dayList = defaultDaysOfWeek,
  state = null,
  setState = null,
  onDayChange = null,
  selectedColor = "#007bff",
  unselectedColor = "#d3d3d3",
  selectedHoverColor = "#0056b3",
  unselectedHoverColor = "#f0f0f0",
  size = 300,
  fontSize = "14px",
  fontWeight = "400",
  fontStyle = "normal",
  selectedTextColor = "#fff",
  unselectedTextColor = "#000",
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(state || []);
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [key, setKey] = useState<number>(0);

  const config = useMemo(
    () => ({
      displayModeBar: false,
      displaylogo: false,
      modeBarButtonsToRemove: ["toImage"],
    }),
    []
  );

  const layout = useMemo(
    () => ({
      height: typeof size === "number" ? size : parseFloat(size),
      width: typeof size === "number" ? size : parseFloat(size),
      margin: { t: 0, b: 0, l: 0, r: 0 },
      showlegend: false,
      paper_bgcolor: "transparent", // canvas background
      plot_bgcolor: "#ed1919ff", // chart area background
      font: {
        size: parseFloat(fontSize),
        color: selectedTextColor,
        family: "Arial, sans-serif",
        weight: fontWeight,
        style: fontStyle,
      },
    }),
    [size, fontSize, fontWeight, fontStyle, selectedTextColor]
  );

  const toggleDay = useCallback(
    (clickedDay: string) => {
      setSelectedDays((prevSelectedDays) => {
        const current = state || prevSelectedDays;
        let updatedDays: string[];
        if (multiple) {
          if (current.includes(clickedDay)) {
            updatedDays = current.filter((d) => d !== clickedDay);
          } else {
            updatedDays = [...current, clickedDay];
          }
        } else {
          updatedDays = current.includes(clickedDay) ? [] : [clickedDay];
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
    },
    [multiple, state, setState, onDayChange]
  );

  const pieData = useMemo(
    () => [
      {
        type: "pie",
        values: Array(dayList.length).fill(1),
        labels: dayList,
        textinfo: "label",
        textposition: "inside",
        automargin: true,
        marker: {
          colors: dayList.map((day) => {
            if (day === hoveredDay) {
              return (state || selectedDays).includes(day)
                ? selectedHoverColor
                : unselectedHoverColor;
            } else {
              return (state || selectedDays).includes(day)
                ? selectedColor
                : unselectedColor;
            }
          }),
        },
        hoverinfo: "label",
        hoverlabel: {
          bgcolor: dayList.map((day) =>
            (state || selectedDays).includes(day)
              ? selectedHoverColor
              : unselectedHoverColor
          ),
        },
        insidetextfont: {
          color: dayList.map((day) =>
            (state || selectedDays).includes(day)
              ? selectedTextColor
              : unselectedTextColor
          ),
        },
      },
    ],
    [
      dayList,
      selectedDays,
      state,
      selectedColor,
      unselectedColor,
      selectedHoverColor,
      unselectedHoverColor,
      selectedTextColor,
      unselectedTextColor,
      hoveredDay,
    ]
  );

  const handleClick = useCallback(
    (data: any) => {
      if (data.points && data.points.length > 0) {
        const clickedDay = data.points[0].label;
        toggleDay(clickedDay);
      } else {
        console.warn("No points clicked");
      }
    },
    [toggleDay]
  );

  useEffect(() => {
    // force re-render on mount so Plotly correctly draws
    setKey((k) => k + 1);
  }, []);

  return (
    <div>
      <Plot
        key={key}
        data={pieData as any}
        layout={layout as any}
        config={config as any}
        onClick={handleClick}
        aria-label="Circular day selector"
        style={{ cursor: "pointer" }}
        onHover={(data) => {
          const point = data.points?.[0] as any; // assert as any for now
          if (point?.label) {
            setHoveredDay(point.label);
          }
        }}
        onUnhover={() => setHoveredDay(null)}
      />
    </div>
  );
};

export default CircularSelector;
