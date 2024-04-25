import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface SelectComponentProps<T> {
  lable: string;
  options: { optionValue: T; label: string }[];
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  doMoreOnChange?: (e: SelectChangeEvent) => void;
}

function SelectComponent<T>(props: SelectComponentProps<T>) {
  const { lable, options, setValue, value, doMoreOnChange } = props;
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value as T);
    if (doMoreOnChange) doMoreOnChange(e);
  };
  return (
    <FormControl fullWidth>
      <FormLabel>{lable}</FormLabel>
      <Select value={value} label={lable} onChange={handleChange}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.optionValue}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
