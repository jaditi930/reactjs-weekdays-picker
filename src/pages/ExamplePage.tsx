import React, { useState } from "react";
import {
  DefaultSelector,
  DropdownSelector,
  // CircularDayPicker,
  CustomMenuSelector,
} from "reactjs-weekdays-picker";

const containerStyle: React.CSSProperties = {
  fontFamily: "sans-serif",
  minHeight: "100vh",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "1.5rem",
  background: "#141111ff",
  maxWidth: "700px",
  margin: "1.5rem auto",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const titleStyle: React.CSSProperties = {
  marginBottom: "0.75rem",
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#dfdfdfff",
};

const codeBlockStyle: React.CSSProperties = {
  position: "relative",
  background: "#2d2d2d",
  color: "#f8f8f2",
  fontFamily: "monospace",
  fontSize: "0.9rem",
  padding: "0.75rem",
  borderRadius: "6px",
  overflowX: "auto",
  marginBottom: "1rem",
};

const copyBtnStyle: React.CSSProperties = {
  position: "absolute",
  top: "6px",
  right: "6px",
  background: "#444",
  color: "#fff",
  border: "none",
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  borderRadius: "4px",
  cursor: "pointer",
};

function CodeBlock({ code }: { code: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div style={codeBlockStyle}>
      <button style={copyBtnStyle} onClick={handleCopy}>
        Copy
      </button>
      <pre style={{ margin: 0, textAlign: "left" }}>{code}</pre>
    </div>
  );
}

export default function ExamplePage() {
  const [selectedDays1, setSelectedDays1] = useState<string[]>([]);
  const [selectedDays2, setSelectedDays2] = useState<string[]>([]);
  const [selectedDays3, setSelectedDays3] = useState<string[]>([]);
  const [selectedDays4, setSelectedDays4] = useState<string[]>([]);

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        📅 reactjs-weekdays-picker — Demo Showcase
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#b4b4b4ff",
          marginBottom: "2rem",
        }}
      >
        A clean single-column layout demonstrating all components of{" "}
        <code>reactjs-weekdays-picker</code>.
      </p>

      {/* DefaultSelector */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>1. DefaultSelector</h2>
        <CodeBlock
          code={`
<DefaultSelector
  multiple={true}
  state={selectedDays}
  setState={setSelectedDays}
  dayList={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
  selectedColor="#007bff"
  unselectedColor="#d3d3d3"
  selectedTextColor="#ffffff"
  unselectedTextColor="#000000"
  width="200px"
  displayLength={3}
/>`}
        />
        <DefaultSelector
          multiple={true}
          state={selectedDays1}
          setState={setSelectedDays1}
          dayList={[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ]}
          selectedColor="#007bff"
          unselectedColor="#d3d3d3"
          selectedTextColor="#ffffff"
          unselectedTextColor="#000000"
          width="200px"
          displayLength={3}
        />
      </div>

      {/* DropdownSelector */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>2. DropdownSelector</h2>
        <CodeBlock
          code={`
<DropdownSelector
  state={selectedDays}
  setState={setSelectedDays}
  dayList={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
  multiple={true}
  selectedColor="#007bff"
  unselectedColor="#d3d3d3"
  width="200px"
/>`}
        />
        <DropdownSelector
          state={selectedDays2}
          setState={setSelectedDays2}
          dayList={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
          multiple={true}
          selectedColor="#007bff"
          unselectedColor="#d3d3d3"
          width="200px"
        />
      </div>

      {/* CircularDayPicker */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>3. CircularDayPicker</h2>
        <CodeBlock
          code={`
<CircularDayPicker
  state={selectedDays}
  setState={setSelectedDays}
  dayList={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
  selectedColor="#007bff"
  unselectedColor="#d3d3d3"
/>`}
        />
        {/* <CircularDayPicker
          state={selectedDays3}
          setState={setSelectedDays3}
          dayList={["Mon", "Tue", "Wed", "Thu", "Fri"]}
          selectedColor="#007bff"
          unselectedColor="#d3d3d3"
        /> */}
      </div>

      {/* CustomMenuSelector */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>4. CustomMenuSelector</h2>
        <CodeBlock
          code={`
<CustomMenuSelector
  state={selectedDays}
  setState={setSelectedDays}
  dayList={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
  selectedColor="#007bff"
  unselectedColor="#d3d3d3"
  placeholder="Select days"
/>`}
        />
        <CustomMenuSelector
          state={selectedDays4}
          setState={setSelectedDays4}
          dayList={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          selectedColor="#007bff"
          unselectedColor="#d3d3d3"
          placeholder="Select days"
        />
      </div>
    </div>
  );
}
