export const getTypescriptLoader = () => ({
	test: /\.tsx?$/,
	use: 'ts-loader',
	exclude: /node_modules/,
});