import type { User } from '../types/user';
import {
  UserCardStyled,
  UserCardName,
  UserCardMeta,
} from '../styles/styled';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <UserCardStyled>
      <UserCardName>{user.name}</UserCardName>
      <UserCardMeta>
        <strong>E-mail:</strong> {user.email}
      </UserCardMeta>
      <UserCardMeta>
        <strong>Telefone:</strong> {user.phone}
      </UserCardMeta>
    </UserCardStyled>
  );
}
