import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz'
		}),
		visualizer()
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			path: 'path-browserify'
		}
	},
	base: './',
	server: {
		host: '0.0.0.0',
		port: 9999,
		open: true,
		proxy: {}
	},
	// * 打包去除 console.log && debugger
	esbuild: {
		pure: ['console.log', 'debugger']
	},
	build: {
		outDir: 'dist',
		minify: 'esbuild',
		// esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
		// minify: "terser",
		// terserOptions: {
		// 	compress: {
		// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
		// 		drop_debugger: true
		// 	}
		// },
		chunkSizeWarningLimit: 1500,
		rollupOptions: {
			output: {
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
			}
		}
	}
});
