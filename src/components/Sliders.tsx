import { Slider } from "@mui/material";
import React from "react";

interface SliderProps {
  color?: string;
  defaultValue: number | number[];
  valueLabelDisplay?: "auto" | "on" | "off";
  step: number;
  value: number | number[];
  onChange: (event: Event, value: number | number[]) => void;
  min: number;
  max: number;
  marks?: boolean;
}

const Sliders: React.FC<SliderProps> = ({
  color,
  defaultValue,
  valueLabelDisplay,
  step,
  value,
  onChange,
  min,
  max,
  marks,
}) => {
  return (
    <Slider
      sx={{ mx: 2, color: color }}
      defaultValue={defaultValue}
      valueLabelDisplay={valueLabelDisplay || "auto" || "off"}
      step={step}
      value={value}
      onChange={onChange}
      marks={marks}
      min={min}
      max={max}
    />
  );
};

export default Sliders;
