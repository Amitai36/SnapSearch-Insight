import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface SelectComponentProps<T> {
  lable: string;
  options: { optionValue: T; label: string }[];
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

function SelectComponent<T>(props: SelectComponentProps<T>) {
  const { lable, options, setValue, value } = props;

  return (
    <FormControl fullWidth>
      <InputLabel>{lable}</InputLabel>
      <Select
        value={value}
        label={lable}
        onChange={(newValue) => {
          const nv = newValue.target.value;
          setValue(nv);
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.label} value={option.optionValue}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
