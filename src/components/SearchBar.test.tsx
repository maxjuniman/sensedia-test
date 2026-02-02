import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renderiza o campo de busca com label', () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);
    expect(screen.getByLabelText(/Buscar usuários por nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite o nome do usuário/)).toBeInTheDocument();
  });

  it('exibe o valor controlado', () => {
    render(<SearchBar value="Leanne" onChange={() => {}} />);
    const input = screen.getByLabelText(/Buscar usuários por nome/i);
    expect(input).toHaveValue('Leanne');
  });

  it('chama onChange quando o usuário digita', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);
    const input = screen.getByLabelText(/Buscar usuários por nome/i);
    await user.type(input, 'a');
    expect(onChange).toHaveBeenCalled();
  });
});
