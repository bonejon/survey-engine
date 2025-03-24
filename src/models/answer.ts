export type SurveyAnswerType = string | number | boolean;

export interface SurveyAnswer {
  questionId: string;
  answer: SurveyAnswerType;
}
