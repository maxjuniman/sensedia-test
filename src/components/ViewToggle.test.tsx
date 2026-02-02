import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewToggle } from './ViewToggle';

describe('ViewToggle', () => {
  it('renderiza os botões Cards e Tabela', () => {
    const onChange = vi.fn();
    render(<ViewToggle value="card" onChange={onChange} />);
    expect(screen.getByRole('button', { name: /Visualização em cards/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Visualização em tabela/i })).toBeInTheDocument();
  });

  it('chama onChange com "table" ao clicar em Tabela', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ViewToggle value="card" onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /Visualização em tabela/i }));
    expect(onChange).toHaveBeenCalledWith('table');
  });

  it('chama onChange com "card" ao clicar em Cards', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ViewToggle value="table" onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /Visualização em cards/i }));
    expect(onChange).toHaveBeenCalledWith('card');
  });
});
