import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { UsersPage } from './UsersPage';
import { mockUsers } from '../test/mocks/handlers';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <MemoryRouter initialEntries={['/']}>
      {children}
    </MemoryRouter>
  );
}

describe('UsersPage', () => {
  beforeAll(() => {
    vi.stubGlobal('fetch', vi.fn((url: string) => {
      if (url.includes('jsonplaceholder.typicode.com/users')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUsers),
        } as Response);
      }
      return Promise.reject(new Error('Unknown URL'));
    }));
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it('exibe título Usuários', async () => {
    render(<UsersPage />, { wrapper: Wrapper });
    await waitFor(() => {
      expect(screen.getByText('Usuários')).toBeInTheDocument();
    });
  });

  it('carrega e exibe lista de usuários', async () => {
    render(<UsersPage />, { wrapper: Wrapper });
    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
      expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    });
  });

  it('exibe campo de busca e alternância de visualização', async () => {
    render(<UsersPage />, { wrapper: Wrapper });
    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });
    expect(screen.getByLabelText(/Buscar usuários por nome/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Visualização em cards/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Visualização em tabela/i })).toBeInTheDocument();
  });

  it('filtra usuários pelo nome ao digitar na busca', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <UsersPage />
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });
    const searchInput = screen.getByLabelText(/Buscar usuários por nome/i);
    await user.clear(searchInput);
    await user.type(searchInput, 'Leanne');
    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
      expect(screen.queryByText('Ervin Howell')).not.toBeInTheDocument();
    });
  });

  it('alterna para visualização em tabela', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <UsersPage />
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });
    await user.click(screen.getByRole('button', { name: /Visualização em tabela/i }));
    await waitFor(() => {
      expect(screen.getByRole('columnheader', { name: 'Nome' })).toBeInTheDocument();
    });
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
  });
});
