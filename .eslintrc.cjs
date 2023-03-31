module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['@mobile-reality/eslint-config/react-typescript', 'plugin:prettier/recommended'],
    globals: {
        JSX: true,
        module: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-void': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-duplicate-imports': 'error',
        'react-hooks/exhaustive-deps': 'error',
    }
};
