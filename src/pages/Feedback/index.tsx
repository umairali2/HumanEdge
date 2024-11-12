import { SelectChangeEvent } from "@mui/material";
import FormSectionLayout from "../../layouts/FormSectionLayout";
import { SelectFeedbackType } from "./SelectFeedbackType";
import PraiseFeedbackForm from "./PraiseFeedbackForm";

function Feedback(props: any) {
  const handleChange = (event: SelectChangeEvent) => {
    console.log("event", event.target.value);
  };

  return (
    <FormSectionLayout
      title="Good feedback is the key to improvement"
      subTitle="We all need people who will give us feedback, thats how we improve"
    >
      <SelectFeedbackType handleChange={handleChange} />
      <PraiseFeedbackForm />
    </FormSectionLayout>
  );
}

export default Feedback;
