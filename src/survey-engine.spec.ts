import { SurveyAnswer } from './models/answer';
import { BooleanSurveyQuestion, TextSurveyQuestion } from './models/question';
import { Survey } from './models/survey';
import { SurveyEngine } from './survey-engine';

describe('SurveyEngine', () => {
  it('should create a default instance', () => {
    const sut = new SurveyEngine();
    expect(sut).toBeDefined();
  });

  it('should process a simple two question survey with no logic', () => {
    const survey: Survey = {
      id: '1',
      title: 'Two questions, no logic survey',
      description: 'Two questions, no logic',
      questions: [
        {
          id: '1',
          text: 'Enter some text into this field',
        } as TextSurveyQuestion,
        {
          id: '2',
          text: 'Enter some different text into this field',
        } as TextSurveyQuestion,
      ],
    };

    const engine = new SurveyEngine();
    engine.initialise(survey);

    expect(engine.currentQuestion).toEqual({
      id: '1',
      text: 'Enter some text into this field',
    } as TextSurveyQuestion);

    engine.answerCurrentQuestion('This is the answer I gave');

    expect(engine.currentQuestion).toEqual({
      id: '2',
      text: 'Enter some different text into this field',
    } as TextSurveyQuestion);

    expect(engine.answers).toEqual([
      {
        questionId: '1',
        answer: 'This is the answer I gave',
      } as SurveyAnswer,
    ]);
  });

  it('should handle a jump in questions with branching logic', () => {
    const survey: Survey = {
      id: '1',
      title: 'Three questions, with branching logic',
      description: 'Can jump the second question if you answer false to the first',
      questions: [
        {
          id: '1',
          text: 'Do you want to answer the next question',
          trueText: 'Yes',
          falseText: 'No',
          branchLogic: [
            {
              answerValue: true,
              nextQuestionId: '2',
            },
            {
              answerValue: false,
              nextQuestionId: '3',
            },
          ],
        } as BooleanSurveyQuestion,
        {
          id: '2',
          text: 'What would you like to tell me then',
        } as TextSurveyQuestion,
        {
          id: '3',
          text: 'Thanks for answering the survey',
        } as TextSurveyQuestion,
      ],
    };

    const engine = new SurveyEngine();
    engine.initialise(survey);

    expect(engine.currentQuestion).toEqual({
      id: '1',
      text: 'Do you want to answer the next question',
      trueText: 'Yes',
      falseText: 'No',
      branchLogic: [
        {
          answerValue: true,
          nextQuestionId: '2',
        },
        {
          answerValue: false,
          nextQuestionId: '3',
        },
      ],
    });

    engine.answerCurrentQuestion(false);

    expect(engine.currentQuestion).toEqual({
      id: '3',
      text: 'Thanks for answering the survey',
    } as TextSurveyQuestion);
  });
});
