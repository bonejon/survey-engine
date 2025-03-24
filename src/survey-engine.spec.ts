import { SurveyAnswer } from './models/answer';
import { TextSurveyQuestion } from './models/question';
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
      questions: [{
        id: '1',
        text: 'Enter some text into this field',        
      } as TextSurveyQuestion, {
        id: '2',
        text: 'Enter some different text into this field',        
      } as TextSurveyQuestion]
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

    expect(engine.answers).toEqual([{
      questionId: '1',
      answer: 'This is the answer I gave'
    } as SurveyAnswer])
  });
});
