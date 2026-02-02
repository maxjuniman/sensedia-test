import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useUsers } from './useUsers';
import { mockUsers } from '../test/mocks/handlers';

describe('useUsers', () => {
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
