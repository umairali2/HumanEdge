import {
  feedbackTypes,
  OpportunityAreaQuestions,
  PraiseQuestions,
  QuickFeedbackQuestions,
} from "./FeedbackForm.constants";

export const feedbackQuestions = (feedbackPayload: any) => {
  switch (feedbackPayload.feedbackType) {
    case feedbackTypes.Praise:
      return PraiseQuestions;
    case feedbackTypes.OpportunityArea:
      return OpportunityAreaQuestions;
    case feedbackTypes.QuickFeedback:
      return QuickFeedbackQuestions;
    default:
      return [];
  }
};
