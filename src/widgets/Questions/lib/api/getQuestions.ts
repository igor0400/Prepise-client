import { QuestionType } from '../../../../entities/Question';
import { api } from '../../../../shared';

export async function getQuestions() {
  const data: QuestionType[] = await api.get('questions').json();
  return data;
}
