module.exports = {
	presets: [
		['@babel/preset-env', {targets: {node: 'current'}}],
		'@babel/preset-typescript'
	],
	plugins: [
		[
			'babel-plugin-transform-rename-import',
			{
				original: 'solid-js',
				replacement: 'solid-ink'
			}
		],
		[
			'babel-plugin-jsx-dom-expressions',
			{moduleName: 'solid-ink', generate: 'universal'}
		]
	]
};
