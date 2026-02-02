import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserTable } from './UserTable';
import type { User } from '../types/user';
import { mockUsers } from '../test/mocks/handlers';

describe('UserTable', () => {
  it('exibe cabeçalhos Nome, Email e Telefone', () => {
    render(<UserTable users={[]} />);
    expect(screen.getByRole('columnheader', { name: 'Nome' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Telefone' })).toBeInTheDocument();
  });

  it('exibe uma linha por usuário com nome, email e telefone', () => {
    const users = mockUsers as User[];
    render(<UserTable users={users} />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument();
    expect(screen.getByText('1-770-736-8031 x56442')).toBeInTheDocument();

    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    expect(screen.getByText('Shanna@melissa.tv')).toBeInTheDocument();
    expect(screen.getByText('010-692-6593 x09125')).toBeInTheDocument();
  });
});
