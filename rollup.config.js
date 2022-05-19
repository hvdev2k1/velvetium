import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const pkg = require('./package.json')

export default [
	{
		input: 'src/main.js',
		output: [
			{
				format: 'cjs',
				file: pkg.main
			},
			{
				format: 'es',
				file: pkg.module
			}
		],
		plugins: [
			svelte({
				emitCss: false
			}),
			resolve(),
			commonjs()
		]
	}
]