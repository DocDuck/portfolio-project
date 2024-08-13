// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname
});
export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	...compat.extends(".eslintrc"),
	{
		rules: {
			'block-spacing': ['error'],
			'indent': ['error', 'tab'],
			'semi': ['error'],
			'semi-spacing': ['error'],
		}
	},
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigDirName: import.meta.dirname,
			},
		},
	},
	{
		files: ['**/*.js'],
		...tseslint.configs.disableTypeChecked,
	}
);