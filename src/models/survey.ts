import { SurveyQuestion, SurveyQuestionBase } from "./question";

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: SurveyQuestionBase[];
}

export interface SurveyResponse {
  id: string;
  surveyId: string;
  userEmail: string;
  responses: SurveyResponse[];
}
