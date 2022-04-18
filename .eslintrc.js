module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "import"],
	env: {
		node: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:cypress/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:import/typescript",
	],
	rules: {
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		// Disallow imports from src/server/ in src/pages/ except for src/pages/api
		// (see the "overrides" section for the exception)
		"import/no-restricted-paths": [
			"error",
			{
				zones: [
					{
						target: "./src/pages",
						from: "./src/server",
					},
				],
			},
		],
		indent: ["error", "tab"],
		"no-tabs": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off"
	},
	overrides: [
		{
			files: ["next.config.js"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
			},
		},
		{
			// Allow imports from src/server/ in src/pages/api
			files: ["src/pages/api/**/*"],
			rules: {
				indent: ["error", "tab"],
				"no-tabs": "off",
				"import/no-restricted-paths": [
					"error",
					{
						zones: [
							{
								target: "./src/pages/api",
								from: "./src/client/",
							},
						],
					},
				],
			},
		},
	],
};
