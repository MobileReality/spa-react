module.exports = {
    'src/**/*.{js,jsx,ts,tsx}': ["bash -c 'npm run tsc'", 'eslint --fix'],
    'src/**/*.{json,md}': 'prettier --write',
};
