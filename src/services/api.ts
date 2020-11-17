import {shuffleArray} from '../utils/utils';

export type Question = {
  category: string;
  correct_anwser: string;
  difficulty: string;
  incorrect_anwser : string[];
  question: string;
  type: string;
}
export type  QuestionState = Question & { anwsers: string[] }
export enum dificulty {
  EASY = "easy",
  MEDIUM= "medium",
  HARD = "hard"
}

export const api = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};