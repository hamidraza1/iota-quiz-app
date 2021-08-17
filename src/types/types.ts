export interface Question {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[] | null;
  user_answer: boolean | null;
}

export interface Answer {
  questionId: number;
  user_answer: boolean;
  original_answer: boolean;
}
