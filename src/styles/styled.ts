import styled from 'styled-components';
import { Button } from 'react-aria-components';
import { theme } from './theme';

export const AppHeader = styled.header`
  background: ${theme.colors.surface};
  color: ${theme.colors.surface};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  box-shadow: ${theme.shadow.md};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const PageLayout = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.md};
  min-height: 100vh;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

export const PageTitle = styled.h1`
  margin: 0 0 ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.xxl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: 320px;
  }
`;

export const ViewToggleGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  align-items: center;
`;

export const CardGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const UserCardStyled = styled.article`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadow.sm};
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    box-shadow: ${theme.shadow.md};
    border-color: ${theme.colors.primary};
  }
`;

export const UserCardName = styled.h2`
  margin: 0 0 ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary};
`;

export const UserCardMeta = styled.p`
  margin: 0 0 ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.textMuted};
  word-break: break-word;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.surface};
  box-shadow: ${theme.shadow.sm};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 400px;
`;

export const TableHead = styled.thead`
  background: ${theme.colors.primary};
  border-bottom: 2px solid ${theme.colors.primary};
`;

export const TableHeaderCell = styled.th`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  text-align: left;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.surface};
`;

export const SortableNameHeader = styled(Button)`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-align: left;
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.surface};
    outline-offset: 2px;
    border-radius: ${theme.radius.sm};
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${theme.colors.background};
  }

  &:hover td {
    color: ${theme.colors.primary};
  }
`;

export const TableCell = styled.td`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text};
  word-break: break-word;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  padding: ${theme.spacing.xxl};
  color: ${theme.colors.textMuted};
  font-size: ${theme.typography.fontSize.lg};
`;

export const ErrorMessage = styled.p`
  text-align: center;
  padding: ${theme.spacing.xxl};
  color: ${theme.colors.error};
  font-size: ${theme.typography.fontSize.lg};
`;

export const EmptyMessage = styled.p`
  text-align: center;
  padding: ${theme.spacing.xxl};
  color: ${theme.colors.textMuted};
  font-size: ${theme.typography.fontSize.base};
`;
