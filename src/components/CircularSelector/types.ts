import { Dispatch, SetStateAction } from "react";

export interface CircularSelectorProps {
  multiple?: boolean;
  dayList?: string[];
  state?: string[] | null;
  setState?: Dispatch<SetStateAction<string[]>> | null;
  onDayChange?: (days: string[]) => void;
  selectedColor?: string;
  unselectedColor?: string;
  selectedHoverColor?: string;
  unselectedHoverColor?: string;
  size?: string | number;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  selectedTextColor?: string;
  unselectedTextColor?: string;
}
