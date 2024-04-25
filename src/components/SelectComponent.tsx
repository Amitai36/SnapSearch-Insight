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
  doMoreOnChange?: (e: SelectChangeEvent<T>) => void;
}

function SelectComponent<T>(props: SelectComponentProps<T>) {
  const { lable, options, setValue, value, doMoreOnChange } = props;

  return (
    <FormControl fullWidth>
      <FormLabel>{lable}</FormLabel>
      <Select
        value={value}
        label={lable}
        onChange={(newValue) => {
          if (
            typeof newValue.target.value !== "string" &&
            typeof newValue !== "string"
          ) {
            setValue(newValue.target.value);
            if (doMoreOnChange) doMoreOnChange(newValue.target.value);
          }
        }}
      >
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
