import { SelectChangeEvent } from "@mui/material";
import FormSectionLayout from "../../layouts/FormSectionLayout";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import { useState } from "react";

function Feedback() {
  const [feedbackPayload, setFeedbackPayload] = useState({});

  const handleChange = (event: SelectChangeEvent, id: string) => {
    const value = event.target.value;
    setFeedbackPayload({
      ...feedbackPayload,
      [id]: value,
    });
  };

  return (
    <FormSectionLayout
      title="Good feedback is the key to improvement"
      subTitle="We all need people who will give us feedback, thats how we improve"
    >
      <FeedbackForm handleChange={handleChange} />
    </FormSectionLayout>
  );
}

export default Feedback;
