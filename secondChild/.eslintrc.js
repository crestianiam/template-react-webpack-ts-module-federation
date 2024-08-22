module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-warning-comments': ['warn', { terms: ['todo', 'tofix'], location: 'start' }],
    },
    "overrides": [
        {
            "files": ["webpack.config.js"],
            "rules": {
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-require-imports": "off"
            }
        }
    ]
};