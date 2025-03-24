import { SurveyAnswerType } from "./answer";

export type SurveyQuestionType = 'text' | 'boolean' | 'number' | 'range' | 'multi-select';
export type SurveyQuestionMultiSelectType = 'dropdown' | 'radio';

export type SurveyQuestionMultiSelectOption = {
  id: string;
  text: string;
}

export interface SurveyQuestionBranchLogic {
  answerValue: SurveyAnswerType | SurveyAnswerType[];
  nextQuestionId: string;
}

export interface SurveyQuestionBase {
  id: string;
  type: SurveyQuestionType;
  text: string;
  hint?: string;
  branchLogic?: SurveyQuestionBranchLogic[]
}

export interface TextSurveyQuestion extends SurveyQuestionBase {
  type: 'text';
  isMultiLine: boolean;
  maxLength: number;
}

export interface BooleanSurveyQuestion extends SurveyQuestionBase {
  type: 'boolean';
  trueText: string;
  falseText: string;
}

export interface NumberSurveyQuestion extends SurveyQuestionBase {
  type: 'number';
  min: number;
  max: number;
}

export interface RangeSurveyQuestion extends SurveyQuestionBase {
  type: 'range';
  minValue: number;
  maxValue: number;
  step: number;
}

export interface MultiSelectQuestion extends SurveyQuestionBase {
  type: 'multi-select';
  multiSelectType: SurveyQuestionMultiSelectType;
  options: SurveyQuestionMultiSelectOption[];
  defaultOption?: SurveyQuestionMultiSelectOption;
}

export type SurveyQuestion = TextSurveyQuestion | NumberSurveyQuestion | BooleanSurveyQuestion | RangeSurveyQuestion | MultiSelectQuestion;
