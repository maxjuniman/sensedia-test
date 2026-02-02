/** Cores do logo Sensedia */
export const sensediaColors = {
  /** Roxo/índigo do logo */
  purple: '#4B2B6F',
  /** Laranja do logo */
  orange: '#E57300',
  /** Variações para hover/estados */
  purpleDark: '#3a2154',
  orangeDark: '#cc6600',
} as const;

export const theme = {
  colors: {
    ...sensediaColors,
    primary: sensediaColors.purple,
    primaryHover: sensediaColors.purpleDark,
    accent: sensediaColors.orange,
    accentHover: sensediaColors.orangeDark,
    background: '#f5f3f7',
    surface: '#ffffff',
    text: '#2d1f3d',
    textMuted: '#5c4d6a',
    border: '#e5e0ec',
    error: '#dc2626',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  },
} as const;

export type Theme = typeof theme;
