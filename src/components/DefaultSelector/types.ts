import { Dispatch, SetStateAction } from "react";

export interface DefaultSelectorProps {
  multiple?: boolean;
  dayList?: string[];
  state?: string[] | null;
  setState?: Dispatch<SetStateAction<string[]>> | null;
  onDayChange?: (days: string[]) => void;
  selectedColor?: string;
  unselectedColor?: string;
  selectedHoverColor?: string;
  unselectedHoverColor?: string;
  selectedTextColor?: string;
  unselectedTextColor?: string;
  width?: string | number;
  displayLength?: number;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  optionContainerStyle?: React.CSSProperties,
  optionStyle?: React.CSSProperties
}
