import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Label from "./Label";

interface IItem {
  label: string;
  value: string[];
  id: string;
  directionRow: boolean;
  additionalClassName: string;
}

interface Props {
  items: IItem[];
  handleChange: (event: any, id: string) => void;
}

const RadioButtons = (props: Props) => {
  const { items, handleChange } = props;

  return (
    <div>
      {items.map((group) => (
        <FormControl sx={{ width: "100%" }}>
          <>
            <Label>{group.label}</Label>
            <RadioGroup
              id={group.id}
              row={group.directionRow}
              aria-labelledby="radio-buttons-group"
              name="radio-buttons-group"
            >
              {group.value.map((val) => (
                <FormControlLabel
                  value={val}
                  control={<Radio />}
                  label={val}
                  onChange={(e) => handleChange(e, group.id)}
                  className={`radio-button-with-label ${group.additionalClassName}`}
                />
              ))}
            </RadioGroup>
            <Divider sx={{ margin: "48px 0" }} />
          </>
        </FormControl>
      ))}
    </div>
  );
};

export default RadioButtons;
