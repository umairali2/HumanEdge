import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
type Props = {
  handleChange: any;
};
export const SelectFeedbackType = (props: Props) => {
  const [feedbackType, setFeedbackType] = useState("");

  const { handleChange } = props;

  const handleFeedbackType = (event: SelectChangeEvent) => {
    setFeedbackType(event.target.value);
    handleChange(event);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-feedback">Select feedback type</InputLabel>
        <Select
          labelId="select-feedback"
          id="select-feedback"
          value={feedbackType}
          label="Select Feedback Type"
          onChange={handleFeedbackType}
          sx={{ marginBottom: "48px" }}
        >
          <MenuItem value="Praise">Praise</MenuItem>
          <MenuItem value="Opportunity">Opportunity</MenuItem>
          <MenuItem value="QuickFeedback">Quick Feedback</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
