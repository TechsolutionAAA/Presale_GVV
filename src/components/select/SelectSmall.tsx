import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { useEffect } from "react";

interface Props {
  label: string;
  items: Array<string>;
  setValue: (value: string) => void;
}

const SelectSmall = (props: Props) => {
  const { label, items, setValue } = props;
  const [localValue, setLocalValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setLocalValue(event.target.value as string);
  };

  useEffect(() => {
    setValue(localValue);
  }, [localValue, setValue]);

  return (
    <FormControl sx={{ m: 1, width: "100%" }} size="medium">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        value={localValue}
        label={label}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        <MenuItem value="" key={`main`}>
          <em>None</em>
        </MenuItem>
        {items.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectSmall;
