import { SelectChangeEvent } from "@mui/material";
import FormSectionLayout from "../../layouts/FormSectionLayout";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import { useState } from "react";
import { feedbackTypes } from "./FeedbackForm/FeedbackForm.constants";

function Feedback() {
  const [feedbackPayload, setFeedbackPayload] = useState<any>({
    feedbackType: feedbackTypes.QuickFeedback,
  });

  const handleChange = (event: SelectChangeEvent, id: string) => {
    const value = event.target.value;

    setFeedbackPayload((prevPayload: any) => {
      const updatedPayload = { ...prevPayload, [id]: value };
      if (
        id === "feedbackType" &&
        value.length !== prevPayload.feedbackType.length
      ) {
        return { feedbackType: value };
      }

      return updatedPayload;
    });
  };

  return (
    <FormSectionLayout
      title="Good feedback is the key to improvement"
      subTitle="We all need people who will give us feedback, thats how we improve"
    >
      <FeedbackForm
        handleChange={handleChange}
        feedbackPayload={feedbackPayload}
      />
    </FormSectionLayout>
  );
}

export default Feedback;
