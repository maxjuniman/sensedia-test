import axios from 'axios';
import type { User } from '../types/user';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

let inFlightPromise: Promise<User[]> | null = null;

export async function fetchUsers(): Promise<User[]> {
  if (inFlightPromise) {
    return inFlightPromise;
  }
  inFlightPromise = axios
    .get<User[]>(USERS_URL)
    .then((res) => res.data)
    .finally(() => {
      inFlightPromise = null;
    });
  return inFlightPromise;
}
