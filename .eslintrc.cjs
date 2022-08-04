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
    rules: {
        // temporary offs
        'line-comment-position': 'off',
        'no-inline-comments': 'off',
        'unicorn/no-empty-file': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
    },
};
