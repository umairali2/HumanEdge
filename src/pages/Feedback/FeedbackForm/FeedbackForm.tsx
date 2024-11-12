import Grid from "@mui/material/Grid2";
import "./FeedbackForm.scss";
import RadioButtons from "../../../components/Radio";
import { questions, selectFeedbackType } from "./FeedbackForm.constants";
import SelectComponent from "../../../components/Select";

type Props = {
  handleChange: any;
};

const FeedbackForm = (props: Props) => {
  const { handleChange } = props;

  return (
    <>
      <Grid sx={{ paddingTop: "16px" }}>
        <SelectComponent
          items={selectFeedbackType}
          handleChange={handleChange}
        />
        <RadioButtons items={questions} handleChange={handleChange} />
      </Grid>
    </>
  );
};

export default FeedbackForm;
