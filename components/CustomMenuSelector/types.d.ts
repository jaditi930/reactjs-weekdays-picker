import { Dispatch, SetStateAction } from 'react';

export interface CustomMenuSelectorProps {
    dayList?: string[];
    state?: string[] | null;
    setState?: Dispatch<SetStateAction<string[]>> | null;
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
    multiple?: boolean;
    iconAlign?: "top" | "bottom" | "left" | "right";
    displayOption?: "icon" | "word" | "both";
    showIcons?: boolean;
    showTicks?: boolean;
    excludeDays?: string[];
    tickOrder?: number;
    dayOrder?: number;
    iconOrder?: number;
    inputBgColor?: string;
    inputBoxStyle?: React.CSSProperties;
    dropdownContainerStyle?: React.CSSProperties;
    dropdownItemStyle?: React.CSSProperties;
}
