export const questions = [
  {
    label:
      "Does this person consistently contribute positively to the team atmosphere?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "consistentlyContribute",
    directionRow: true,
    additionalClassName: "",
  },
  {
    label: "Is this person willing to help others when they are stuck?",
    value: ["No", "Occasionally", "Sometimes", "Usually", "Always"],
    id: "willingToHelp",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
];

export const selectFeedbackType = [
  {
    label: "Select feedback type",
    id: "feedback-type",
    options: [
      { name: "Praise", value: "Praise" },
      { name: "Opportunity Area", value: "Opportunity Area" },
      { name: "Quick Feedback", value: "Quick Feedback" },
    ],
  },
];
