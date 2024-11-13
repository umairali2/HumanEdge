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
  {
    label: "Does this person show dedication and commitment to their work?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "showDedicationAndCommitment",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
  {
    label: "Is this person a role model for positive work behavior?",
    value: ["No", "Not often", "Sometimes", "Frequently", "Always"],
    id: "positiveWorkBehavior",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
  {
    label:
      "Does this person celebrate others' achievements and give credit where it's due?",
    value: ["No", "Occasionally", "Sometimes", "Often", "Always"],
    id: "celebrateOthersAchievementsAndGiveCredit",
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
