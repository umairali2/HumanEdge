import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Label from "../../../components/Label";
import "./index.scss";

const PraiseFeedbackForm = () => {
  const questions = [
    {
      label:
        "Does this person consistently contribute positively to the team atmosphere?",
      value: ["No", "Rarely", "Sometimes", "Often", "Always"],
      directionRow: true,
      additionalClassName: "",
    },
    {
      label: "Is this person willing to help others when they are stuck?",
      value: ["No", "Occasionally", "Sometimes", "Usually", "Always"],
      directionRow: true,
      additionalClassName: "",
      isDisabled: false,
    },
  ];
  return (
    <>
      <Grid sx={{ paddingTop: "16px" }}>
        {questions.map((group) => (
          <FormControl sx={{ width: "100%" }}>
            <>
              <Label>{group.label}</Label>
              <RadioGroup
                row={group.directionRow}
                aria-labelledby="radio-buttons-group"
                name="radio-buttons-group"
              >
                {group.value.map((val) => (
                  <FormControlLabel
                    value={val}
                    control={<Radio />}
                    label={val}
                    className={`radio-button-with-label ${group.additionalClassName}`}
                  />
                ))}
              </RadioGroup>
              <Divider sx={{ margin: "48px 0" }} />
            </>
          </FormControl>
        ))}
      </Grid>
    </>
  );
};

export default PraiseFeedbackForm;
