import { Question } from '../../../../entities/Question';
import { api } from '../../../../shared';

export async function getQuestions() {
  const data: Question[] = await api.get('questions').json();
  return data;
}
