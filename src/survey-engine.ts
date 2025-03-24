import { SurveyAnswer, SurveyAnswerType } from "./models/answer";
import { SurveyQuestion, SurveyQuestionBase } from "./models/question";
import { Survey } from "./models/survey";

export class SurveyEngine {
  private _survey: Survey | undefined;
  private _currentQuestionIndex = 0;
  private _answers: SurveyAnswer[] = [];

  get currentQuestion(): SurveyQuestion | undefined {
    if (this._survey && this._currentQuestionIndex !== undefined) {
      return this._survey.questions[this._currentQuestionIndex];
    }

    return undefined;
  }

  get answers(): SurveyAnswer[] {
    return this._answers;
  }

  initialise(survey: Survey) {
    this._currentQuestionIndex = 0;
    this._survey = survey;
    this._answers = [];
  }

  answerCurrentQuestion(answerValue: SurveyAnswerType): void {
    if (this.currentQuestion) {
      this._answers.push({
        answer: answerValue,
        questionId: this.currentQuestion.id
      });

      this.getNextQuestion(answerValue);
    }
  }

  private getNextQuestion(answerValue: SurveyAnswerType): void {
    const currentQuestion = {...this.currentQuestion} as SurveyQuestionBase;
    if (!currentQuestion.branchLogic) {
      this._currentQuestionIndex++;
    }
  }
}
