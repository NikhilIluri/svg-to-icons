/** @type {import('svgo').PluginConfig[]} */
const outlineSVGOConfig = [
	{
		name: "removeDimensions",
		active: true,
	},
	{
		name: "sortAttrs",
		active: true,
	},
	{
		name: "removeAttrs",
		params: {
			attrs: "(stroke)",
		},
	},
	{
		name: "addAttributesToSVGElement",
		params: {
			attributes: [
				{
					stroke: "currentColor",
				},
			],
		},
	},
];

module.exports = outlineSVGOConfig;