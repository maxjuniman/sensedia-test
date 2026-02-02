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

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  return (
    <TableWrapper role="region" aria-label="Lista de usuários em tabela">
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeaderCell scope="col">Nome</TableHeaderCell>
            <TableHeaderCell scope="col">Email</TableHeaderCell>
            <TableHeaderCell scope="col">Telefone</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {users.map((user) => (
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
