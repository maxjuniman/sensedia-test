import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';
import type { User } from '../types/user';
import { mockUsers } from '../test/mocks/handlers';

describe('UserCard', () => {
  it('exibe nome, email e telefone do usuário', () => {
    const user = mockUsers[0] as User;
    render(<UserCard user={user} />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText(/Sincere@april.biz/)).toBeInTheDocument();
    expect(screen.getByText(/1-770-736-8031/)).toBeInTheDocument();
  });

  it('renderiza corretamente para outro usuário', () => {
    const user = mockUsers[1] as User;
    render(<UserCard user={user} />);

    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    expect(screen.getByText(/Shanna@melissa.tv/)).toBeInTheDocument();
    expect(screen.getByText(/010-692-6593/)).toBeInTheDocument();
  });
});
