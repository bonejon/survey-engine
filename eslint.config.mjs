import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    { ignores: ['**/*.js'] },
    {
        rules: {
            'max-len': ['error', { code: 1000 }]
        }
    }
];