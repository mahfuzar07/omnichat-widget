import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts({ include: ['src'] })],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.tsx'),
			name: 'ChatWidget',
			fileName: 'chat-widget',
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
