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

export const normalizedFeedbackPayload = (payload: any) => {
  // Get the appropriate question set based on feedback type
  let questionSet: any[] = [];
  if (payload.feedbackType === "Praise") {
    questionSet = PraiseQuestions;
  } else if (payload.feedbackType === "Opportunity Area") {
    questionSet = OpportunityAreaQuestions;
  } else if (payload.feedbackType === "Quick Feedback") {
    questionSet = QuickFeedbackQuestions;
  }

  // Map over the responses and normalize
  const feedbackResponse = questionSet.map((question) => {
    const response = payload[question.id]; // Get the user's response for each question
    return {
      id: question.id,
      label: question.label,
      response: response || "No Response", // Default if no response is provided
    };
  });

  // Construct the result
  const res = {
    feedbackType: payload.feedbackType,
    feedbackResponse,
  };

  console.log("res", res);
  return res;
};
