import axios from 'axios';
import type { User } from '../types/user';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

let controllerRequest: Promise<User[]> | null = null;

export async function fetchUsers(): Promise<User[]> {
  if (controllerRequest) {
    return controllerRequest;
  }

  controllerRequest = axios
    .get<User[]>(USERS_URL)
    .then((res) => res.data)
    .finally(() => {
      controllerRequest = null;
    });

  return controllerRequest;
}
