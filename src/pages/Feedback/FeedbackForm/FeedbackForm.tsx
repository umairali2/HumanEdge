import Grid from "@mui/material/Grid2";
import "./FeedbackForm.scss";
import RadioButtons from "../../../components/Radio";
import { selectFeedbackType } from "./FeedbackForm.constants";
import SelectComponent from "../../../components/Select";
import TextAreaComponent from "../../../components/TextArea";
import ButtonComponent from "../../../components/ButtonComponent";
import { feedbackQuestions } from "./FeedbackForm.helper.";

type Props = {
  handleChange: any;
  feedbackPayload: any;
};

const FeedbackForm = (props: Props) => {
  const { handleChange, feedbackPayload } = props;

  return (
    <>
      <Grid sx={{ paddingTop: "16px" }}>
        <SelectComponent
          items={selectFeedbackType}
          handleChange={handleChange}
        />
        <RadioButtons
          items={feedbackQuestions(feedbackPayload)}
          handleChange={handleChange}
        />
        <TextAreaComponent
          label="Enter your thoughts, if any"
          handleChange={handleChange}
        />
        <ButtonComponent text="Submit" extraClass="pull-right" />
      </Grid>
    </>
  );
};

export default FeedbackForm;
