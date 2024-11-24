import {
  feedbackTypes,
  OpportunityAreaQuestions,
  PraiseQuestions,
  QuickFeedbackQuestions,
} from "./FeedbackForm.constants";
import { FeedbackInterface } from "./FeedbackForm.interface";

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

export const normalizedFeedbackPayload = (payload: FeedbackInterface) => {
  let questionSet: any[] = [];
  if (payload.feedbackType === feedbackTypes.Praise) {
    questionSet = PraiseQuestions;
  } else if (payload.feedbackType === feedbackTypes.OpportunityArea) {
    questionSet = OpportunityAreaQuestions;
  } else if (payload.feedbackType === feedbackTypes.QuickFeedback) {
    questionSet = QuickFeedbackQuestions;
  }

  const feedbackResponse = questionSet.map((question) => {
    const response = payload[question.id];
    return {
      id: question.id,
      label: question.label,
      response: response || "No Response",
    };
  });

  const result = {
    feedbackType: payload.feedbackType,
    thoughts: payload.thoughts || "-",
    feedbackResponse,
  };

  return result;
};
