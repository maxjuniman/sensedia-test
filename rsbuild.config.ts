import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginStyledComponents } from '@rsbuild/plugin-styled-components';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact(), pluginStyledComponents()],
  html: {
    title: 'Sensedia - Lista de Usuários',
    favicon: './public/favicon.ico',
  },
});
