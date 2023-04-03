import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import Terminal from 'vite-plugin-terminal';

// https://vitejs.dev/config/
// https://www.npmjs.com/package/vite-plugin-node
export default defineConfig({
  server: {
    host: true,
    hmr: {
      clientPort: 3001,
    },
    port: 3001,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/app.ts',
      exportName: 'viteNodeApp',
      tsCompiler: 'esbuild',
    }),
    Terminal({
      output: ['terminal', 'console'],
    }),
  ],
  optimizeDeps: {},
});
