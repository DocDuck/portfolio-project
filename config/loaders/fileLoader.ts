export const getFileLoader = () => ({
	test: /\.(png|jpe?g|gif|woff|woff2)$/i,
	use: [
		{
			loader: 'file-loader',
		},
	],
});