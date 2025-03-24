import { SurveyQuestion } from "./question";

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: SurveyQuestion[];
}

export interface SurveyResponse {
  id: string;
  surveyId: string;
  userEmail: string;
  responses: SurveyResponse[];
}
