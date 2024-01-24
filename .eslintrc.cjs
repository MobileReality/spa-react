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
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-uses-react': 'error',   
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'off'
    },
    ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'commitlint.config.cjs'],
};
