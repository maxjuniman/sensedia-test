import { Button, Group } from 'react-aria-components';
import { ViewToggleGroup } from '../styles/styled';
import { theme } from '../styles/theme';
import styled from 'styled-components';

const StyledGroup = styled(Group)`
  display: flex;
  border-radius: ${theme.radius.md};
  overflow: hidden;
  border: 1px solid ${theme.colors.primary};
`;

const StyledButton = styled(Button)<{ $selected?: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  font-family: ${theme.typography.fontFamily};
  font-weight: ${theme.typography.fontWeight.medium};
  border: none;
  cursor: pointer;
  background: ${(p) => (p.$selected ? theme.colors.accent : theme.colors.surface)};
  color: ${(p) => (p.$selected ? 'white' : theme.colors.textMuted)};
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${(p) => (p.$selected ? theme.colors.accentHover : theme.colors.background)};
    color: ${(p) => (p.$selected ? 'white' : theme.colors.primary)};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }
`;

type ViewMode = 'card' | 'table';

interface ViewToggleProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <ViewToggleGroup role="group" aria-label="Visualização da lista">
      <span style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.textMuted }}>
        Visualização:
      </span>
      <StyledGroup aria-label="Alternar entre card e tabela">
        <StyledButton
          aria-label="Visualização em cards"
          $selected={value === 'card'}
          onPress={() => onChange('card')}
        >
          Cards
        </StyledButton>
        <StyledButton
          aria-label="Visualização em tabela"
          $selected={value === 'table'}
          onPress={() => onChange('table')}
        >
          Tabela
        </StyledButton>
      </StyledGroup>
    </ViewToggleGroup>
  );
}
