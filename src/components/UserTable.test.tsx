import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserTable } from './UserTable';
import type { User } from '../types/user';
import { mockUsers } from '../test/mocks/handlers';

describe('UserTable', () => {
  it('exibe cabeçalhos Nome, Email e Telefone', () => {
    render(<UserTable users={[]} />);
    expect(screen.getByRole('columnheader', { name: /Nome/ })).toBeInTheDocument();
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

  it('alterna ordenação por nome ao clicar no cabeçalho Nome', async () => {
    const user = userEvent.setup();
    const usersList = mockUsers as User[];
    render(<UserTable users={usersList} />);

    const nomeHeader = screen.getByRole('button', { name: /Ordenar por nome/ });
    const rows = screen.getAllByRole('row').slice(1);

    expect(rows[0]).toHaveTextContent('Ervin Howell');
    expect(rows[1]).toHaveTextContent('Leanne Graham');

    await user.click(nomeHeader);
    const rowsDesc = screen.getAllByRole('row').slice(1);
    expect(rowsDesc[0]).toHaveTextContent('Leanne Graham');
    expect(rowsDesc[1]).toHaveTextContent('Ervin Howell');

    await user.click(nomeHeader);
    const rowsAscAgain = screen.getAllByRole('row').slice(1);
    expect(rowsAscAgain[0]).toHaveTextContent('Ervin Howell');
    expect(rowsAscAgain[1]).toHaveTextContent('Leanne Graham');
  });
});
