import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import type { User } from '../types/user';
import {
  TableWrapper,
  StyledTable,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from '../styles/styled';
import { SortableNameHeader } from '../styles/styled';

interface UserTableProps {
  users: User[];
}

type SortDirection = 'asc' | 'desc';

function sortByName(users: User[], direction: SortDirection): User[] {
  const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name, 'pt-BR'),
  );
  return direction === 'asc' ? sorted : sorted.reverse();
}

export function UserTable({ users }: UserTableProps) {
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const sortedUsers = useMemo(() => 
    sortByName(users, sortDirection),
    [users, sortDirection]
  );

  const handleSortByName = () => {
    setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <TableWrapper role="region" aria-label="Lista de usuários em tabela">
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeaderCell scope="col" aria-sort={sortDirection === 'asc' ? 'ascending' : 'descending'}>
              <SortableNameHeader
                aria-label={`Ordenar por nome, ordem ${sortDirection === 'asc' ? 'crescente' : 'decrescente'}. Clique para alternar.`}
                onPress={handleSortByName}
              >
                Nome{' '}
                <FontAwesomeIcon
                  icon={sortDirection === 'asc' ? faSortUp : faSortDown}
                  size="sm"
                  aria-hidden
                />
              </SortableNameHeader>
            </TableHeaderCell>
            <TableHeaderCell scope="col">E-mail</TableHeaderCell>
            <TableHeaderCell scope="col">Telefone</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
}
