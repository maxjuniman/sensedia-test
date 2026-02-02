import type { User } from '../types/user';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(USERS_URL);
  if (!response.ok) {
    throw new Error('Falha ao buscar usuários');
  }
  return response.json() as Promise<User[]>;
}
