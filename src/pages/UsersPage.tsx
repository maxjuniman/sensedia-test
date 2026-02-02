import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import { UserCard } from '../components/UserCard';
import { UserTable } from '../components/UserTable';
import { SearchBar } from '../components/SearchBar';
import { ViewToggle } from '../components/ViewToggle';
import {
  PageLayout,
  PageTitle,
  Toolbar,
  CardGrid,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
} from '../styles/styled';

const SEARCH_PARAM = 'search';
const VIEW_PARAM = 'view';

type ViewMode = 'card' | 'table';

function filterUsersByName<T extends { name: string }>(users: T[], search: string): T[] {
  const term = search.trim().toLowerCase();
  if (!term) return users;
  return users.filter((u) => u.name.toLowerCase().includes(term));
}

function parseView(value: string | null): ViewMode {
  if (value === 'card' || value === 'table') return value;
  return 'card';
}

export function UsersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(SEARCH_PARAM) ?? '';
  const view = parseView(searchParams.get(VIEW_PARAM));

  const { users, loading, error } = useUsers();

  const filteredUsers = useMemo(
    () => filterUsersByName(users, search),
    [users, search],
  );

  const handleSearchChange = (value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value.trim()) {
      next.set(SEARCH_PARAM, value.trim());
    } else {
      next.delete(SEARCH_PARAM);
    }
    setSearchParams(next, { replace: true });
  };

  const handleViewChange = (newView: ViewMode) => {
    const next = new URLSearchParams(searchParams);
    next.set(VIEW_PARAM, newView);
    setSearchParams(next, { replace: true });
  };

  if (loading) {
    return (
      <PageLayout>
        <PageTitle>Usuários</PageTitle>
        <LoadingMessage>Carregando usuários...</LoadingMessage>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <PageTitle>Usuários</PageTitle>
        <ErrorMessage>{error}</ErrorMessage>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageTitle>Usuários</PageTitle>
      <Toolbar>
        <SearchBar value={search} onChange={handleSearchChange} />
        <ViewToggle value={view} onChange={handleViewChange} />
      </Toolbar>

      {filteredUsers.length === 0 ? (
        <EmptyMessage>
          {search.trim()
            ? 'Nenhum usuário encontrado com esse nome.'
            : 'Nenhum usuário disponível.'}
        </EmptyMessage>
      ) : view === 'card' ? (
        <CardGrid role="list" aria-label="Lista de usuários em cards">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </CardGrid>
      ) : (
        <UserTable users={filteredUsers} />
      )}
    </PageLayout>
  );
}
