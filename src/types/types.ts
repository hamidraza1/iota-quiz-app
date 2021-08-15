export interface Question {
  id?: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[] | null;
}

export interface Answer {}
