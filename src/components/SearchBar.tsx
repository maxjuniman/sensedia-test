import { TextField, Input, Label } from 'react-aria-components';
import { SearchWrapper } from '../styles/styled';
import { theme } from '../styles/theme';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  font-family: ${theme.typography.fontFamily};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  color: ${theme.colors.text};
  background: ${theme.colors.surface};
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${theme.colors.textMuted};
  }

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}33;
  }
`;

const StyledLabel = styled(Label)`
  display: block;
  margin-bottom: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary};
`;

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <SearchWrapper>
      <TextField
        aria-label="Buscar usuários por nome"
        value={value}
        onChange={onChange}
      >
        <StyledLabel>Buscar por nome</StyledLabel>
        <StyledInput type="search" placeholder="Digite o nome do usuário..." />
      </TextField>
    </SearchWrapper>
  );
}
