import { useState,CSSProperties } from "react";
import {
  DefaultSelector,
  DropdownSelector,
  CircularSelector,
  CustomMenuSelector,
} from "reactjs-weekdays-picker";

// ====== Styles ======
const containerStyle = {
  fontFamily: "sans-serif",
  minHeight: "100vh",
  color: "#f5f5f5",
  paddingBottom: "2rem",
};

const cardStyle = {
  border: "1px solid #444",
  borderRadius: "10px",
  padding: "1.5rem",
  background: "#1e1e1e",
  maxWidth: "800px",
  margin: "1.5rem auto",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};

const titleStyle = {
  marginBottom: "0.75rem",
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#00d4ff",
};

const codeBlockStyle: CSSProperties  = {
  background: "#2d2d2d",
  color: "#f8f8f2",
  fontFamily: "monospace",
  fontSize: "0.9rem",
  padding: "0.75rem",
  borderRadius: "6px",
  overflowX: "auto",
  marginBottom: "1rem",
};

// ====== Example Page ======
export default function ExamplePage() {
  const [daysDefault, setDaysDefault] = useState<string[]>([]);
  const [daysDropdown, setDaysDropdown] = useState<string[]>([]);
  const [daysCircular, setDaysCircular] = useState<string[]>([]);
  const [daysMenu, setDaysMenu] = useState<string[]>([]);

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        📅 reactjs-weekdays-picker — Demo Showcase
      </h1>

      {/* DefaultSelector */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>DefaultSelector</h2>
        <pre style={codeBlockStyle}>{`<DefaultSelector
  multiple={true}
  state={daysDefault}
  setState={setDaysDefault}
  dayList={["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}
  selectedColor="#007bff"
  unselectedColor="#d3d3d3"
  selectedTextColor="#000000"
  unselectedTextColor="#000000"
  width="200px"
  displayLength={3}
  selectedHoverColor="#0056b3"
  unselectedHoverColor="#e0e0e0"
/>`}</pre>
        <DefaultSelector
          multiple={true}
          state={daysDefault}
          setState={setDaysDefault}
          dayList={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          selectedColor="#007bff"
          unselectedColor="#d3d3d3"
          selectedTextColor="#000000"
          unselectedTextColor="#000000"
          width="200px"
          displayLength={3}
          selectedHoverColor="#0056b3"
          unselectedHoverColor="#e0e0e0"
        />
      </div>

      {/* DropdownSelector */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>DropdownSelector</h2>
        <pre style={codeBlockStyle}>{`<DropdownSelector
  state={daysDropdown}
  setState={setDaysDropdown}
  dayList={["Mon","Tue","Wed","Thu","Fri"]}
  multiple={true}
  inputTextColor="#000000"
  inputBgColor="#ffffff"
  selectedColor="#007bff"
  unselectedColor="#d3d3d3"
  width="220px"
  placeholder="Select days"
  inputBoxStyle={{ borderRadius: "4px", padding: "4px" }}
  dropdownContainerStyle={{ borderRadius: "6px" }}
  dropdownItemStyle={{ padding: "6px 8px" }}
/>`}</pre>
        <DropdownSelector
          state={daysDropdown}
          setState={setDaysDropdown}
          dayList={["Mon", "Tue", "Wed", "Thu", "Fri"]}
          multiple={true}
          inputTextColor="#000000"
          inputBgColor="#ffffff"
          selectedColor="#007bff"
          unselectedColor="#d3d3d3"
          width="220px"
          placeholder="Select days"
          inputBoxStyle={{ borderRadius: "4px", padding: "4px" }}
          dropdownContainerStyle={{ borderRadius: "6px" }}
          dropdownItemStyle={{ padding: "6px 8px" }}
        />
      </div>

      {/* CircularSelector */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>CircularSelector</h2>
        <pre style={codeBlockStyle}>{`<CircularSelector
  state={daysCircular}
  setState={setDaysCircular}
  dayList={["Sun", "Sat", "Mon", "Tue", "Wed", "Thu", "Fri"]}
  size="300"
  selectedColor="#03a9f4"
  unselectedColor="#444"
/>`}</pre>
        <CircularSelector
          state={daysCircular}
          setState={setDaysCircular}
          dayList={["Sun", "Sat", "Mon", "Tue", "Wed", "Thu", "Fri"]}
          size="300"
          selectedColor="#03a9f4"
          unselectedColor="#444"
        />
      </div>

      {/* CustomMenuSelector */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>CustomMenuSelector</h2>
        <pre style={codeBlockStyle}>{`<CustomMenuSelector
  state={daysMenu}
  setState={setDaysMenu}
  dayList={["Mon","Tue","Wed"]}
  placeholder="Select days"
  inputTextColor="#000000"
  inputBgColor="#ffffff"
  showIcons={true}
  showTicks={true}
  inputBoxStyle={{ borderRadius: "4px", padding: "4px" }}
  dropdownContainerStyle={{ borderRadius: "6px" }}
  dropdownItemStyle={{ padding: "6px 8px" }}
/>`}</pre>
        <CustomMenuSelector
          state={daysMenu}
          setState={setDaysMenu}
          dayList={["Mon", "Tue", "Wed"]}
          placeholder="Select days"
          inputTextColor="#000000"
          inputBgColor="#ffffff"
          showIcons={true}
          showTicks={true}
          inputBoxStyle={{ borderRadius: "4px", padding: "4px" }}
          dropdownContainerStyle={{ borderRadius: "6px" }}
          dropdownItemStyle={{ padding: "6px 8px" }}
        />
      </div>
    </div>
  );
}
