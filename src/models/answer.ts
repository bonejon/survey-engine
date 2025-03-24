export type SurveyAnswerType = string | number;

export interface SurveyAnswer {
  questionId: string;
  answer: SurveyAnswerType;
}
