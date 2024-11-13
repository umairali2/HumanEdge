export const PraiseQuestions = [
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

export const OpportunityAreaQuestions = [
  {
    label: "Does this person effectively communicate their ideas to the team?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "effectivelyCommunicateTheirIdeas",
    directionRow: true,
    additionalClassName: "",
  },
  {
    label: "Does this person seek and accept constructive feedback?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "seekAndAcceptConstructiveFeedback",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
  {
    label: "Is this person open to collaborating with team members?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "openToCollaboratingWithTeam",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
  {
    label: "Does this person complete tasks on time and meet deadlines?",
    value: ["No", "Occasionally", "Sometimes", "Mostly", "Always"],
    id: "completeTasksOnTime",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
  {
    label: "Is this person proactive in identifying areas for improvement?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "proactiveInIdentifyingAreasForImprovement",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
  {
    label:
      "Does this person demonstrate problem-solving skills when facing challenges?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "demonstrateProblemSolvingSkills",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
];

export const QuickFeedbackQuestions = [
  {
    label: "Would you like to work with this person on future projects?",
    value: ["No", "Unlikely", "Maybe", "Likely", "Definitely"],
    id: "workWithThisPersonOnFutureProjects",
    directionRow: true,
    additionalClassName: "",
  },
  {
    label: "Do you feel this person contributes value to team meetings?",
    value: ["No", "Rarely", "Sometimes", "Mostly", "Always"],
    id: "personContributesValueToTeamMeetings",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
  {
    label:
      "Does this person adapt well to new situations or changes in the project?",
    value: ["No", "Rarely", "Sometimes", "Often", "Always"],
    id: "personAdaptWellToNewSituations",
    directionRow: true,
    additionalClassName: "",
    isDisabled: false,
  },
];

export const feedbackTypes = {
  Praise: "Praise",
  OpportunityArea: "Opportunity Area",
  QuickFeedback: "Quick Feedback",
};

export const selectFeedbackType = [
  {
    label: "Select feedback type",
    id: "feedbackType",
    defaultValue: feedbackTypes.QuickFeedback,
    options: [
      { name: feedbackTypes.Praise, value: feedbackTypes.Praise },
      {
        name: feedbackTypes.OpportunityArea,
        value: feedbackTypes.OpportunityArea,
      },
      { name: feedbackTypes.QuickFeedback, value: feedbackTypes.QuickFeedback },
    ],
  },
];
