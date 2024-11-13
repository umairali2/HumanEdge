import { feedbackTypes, questions } from "./FeedbackForm.constants";

export const feedbackQuestions = (feedbackPayload: any) => {
  return (
    (feedbackPayload.feedbackType === feedbackTypes.Praise && questions) ||
    [] ||
    (feedbackPayload.feedbackType === feedbackTypes.OpportunityArea &&
      questions) ||
    [] ||
    (feedbackPayload.feedbackType === feedbackTypes.QuickFeedback &&
      questions) ||
    []
  );
};
