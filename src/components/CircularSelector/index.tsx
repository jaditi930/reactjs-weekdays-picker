import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Plot from "react-plotly.js";

export interface CircularDayPickerProps {
  multiple?: boolean;
  dayList?: string[];
  state?: string[] | null;
  setState?: ((days: string[]) => void) | null;
  onDayChange?: ((days: string[]) => void) | null;
  selectedColor?: string;
  unselectedColor?: string;
  selectedHoverColor?: string;
  unselectedHoverColor?: string;
  size?: number | string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  selectedTextColor?: string;
  unselectedTextColor?: string;
}

// ✅ Component
const CircularDayPicker: React.FC<CircularDayPickerProps> = ({
  multiple = false,
  dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  state = null,
  setState = null,
  onDayChange = null,
  selectedColor = "#007bff",
  unselectedColor = "#d3d3d3",
  selectedHoverColor = "#0056b3",
  unselectedHoverColor = "#f0f0f0",
  size = 300,
  fontSize = "14px",
  fontWeight = "normal",
  fontStyle = "normal",
  selectedTextColor = "#fff",
  unselectedTextColor = "#000",
}) => {
  // internal state if state/setState not provided
  const [selectedDays, setSelectedDays] = useState<string[]>(state || []);
  const [key, setKey] = useState(0);

  // ✅ Plotly config
  const config = useMemo(
    () => ({
      displayModeBar: false,
      displaylogo: false,
      modeBarButtonsToRemove: ["toImage"],
    }),
    []
  );

  // ✅ Layout
  const layout = useMemo(
    () => ({
      height: size,
      width: size,
      margin: { t: 0, b: 0, l: 0, r: 0 },
      showlegend: false,
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

  // ✅ Toggle day logic
  const toggleDay = useCallback(
    (clickedDay: string) => {
      setSelectedDays((prevSelectedDays) => {
        const currentDays = state || prevSelectedDays;
        let updatedDays: string[];

        if (multiple) {
          if (currentDays.includes(clickedDay)) {
            updatedDays = currentDays.filter((day) => day !== clickedDay);
          } else {
            updatedDays = [...currentDays, clickedDay];
          }
        } else {
          updatedDays = currentDays.includes(clickedDay)
            ? []
            : [clickedDay];
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

  // ✅ Pie data
  const pieData = useMemo(
    () => [
      {
        type: "pie" as const,
        values: Array(dayList.length).fill(1),
        labels: dayList,
        textinfo: "label",
        textposition: "inside",
        automargin: true,
        marker: {
          colors: dayList.map((day) =>
            (state || selectedDays).includes(day)
              ? selectedColor
              : unselectedColor
          ),
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
      selectedDays,
      state,
      selectedColor,
      unselectedColor,
      selectedHoverColor,
      unselectedHoverColor,
      selectedTextColor,
      unselectedTextColor,
      dayList,
    ]
  );

  // ✅ Click handler
  const handleClick = useCallback(
    (data: any) => {
      if (data.points?.length > 0) {
        const clickedDay = data.points[0].label as string;
        toggleDay(clickedDay);
      } else {
        console.warn("No points clicked");
      }
    },
    [toggleDay]
  );

  // ✅ force rerender once
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);

  return (
    <div className="circular-day-picker">
      <Plot
        key={key}
        data={pieData}
        layout={layout}
        config={config}
        onClick={handleClick}
        aria-label="Circular day selector"
      />
    </div>
  );
};

export default CircularDayPicker;
