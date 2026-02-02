import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useUsers } from './useUsers';
import { mockUsers } from '../test/mocks/handlers';

vi.mock('axios');

describe('useUsers', () => {
  beforeAll(() => {
    vi.mocked(axios.get).mockResolvedValue({ data: mockUsers });
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('retorna loading true inicialmente', () => {
    const { result } = renderHook(() => useUsers());
    expect(result.current.loading).toBe(true);
    expect(result.current.users).toEqual([]);
    expect(result.current.error).toBe(null);
  });

  it('carrega usuários com sucesso', async () => {
    const { result } = renderHook(() => useUsers());
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.users).toHaveLength(2);
    expect(result.current.users[0].name).toBe('Leanne Graham');
    expect(result.current.error).toBe(null);
  });
});
