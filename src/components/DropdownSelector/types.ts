export interface DropdownSelectorProps {
  multiple?: boolean;
  dayList?: string[];
  state?: string[];
  setState?: (days: string[]) => void;
  onDayChange?: (days: string[]) => void;
  selectedColor?: string;
  unselectedColor?: string;
  selectedHoverColor?: string;
  unselectedHoverColor?: string;
  width?: string | number;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  selectedTextColor?: string;
  unselectedTextColor?: string;
  inputTextColor?: string;
  placeholder?: string;
  inputBgColor?: string;
  inputBoxStyle?: React.CSSProperties;
  dropdownContainerStyle?: React.CSSProperties;
  dropdownItemStyle?: React.CSSProperties;
}
