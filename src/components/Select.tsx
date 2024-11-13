import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface IOptions {
  name: string;
  value: string;
}

interface IItems {
  label: string;
  id: string;
  options: IOptions[];
  defaultValue: string;
}

interface Props {
  items: IItems[];
  handleChange: (event: SelectChangeEvent, id: string) => void;
}

const SelectComponent = (props: Props) => {
  const { items, handleChange } = props;

  const [feedbackType, setFeedbackType] = useState(items[0].defaultValue);

  const handleFeedbackType = (event: SelectChangeEvent, id: string) => {
    setFeedbackType(event.target.value);
    handleChange(event, id);
  };

  return (
    <div>
      {items.map((item) => (
        <FormControl fullWidth>
          <InputLabel id={item.id}>{item.label}</InputLabel>
          <Select
            labelId={item.id}
            id={item.id}
            value={feedbackType}
            label={item.label}
            onChange={(e) => handleFeedbackType(e, item.id)}
            sx={{ marginBottom: "48px" }}
          >
            {item.options.map((option) => (
              <MenuItem value={option.value}>{option.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </div>
  );
};

export default SelectComponent;
