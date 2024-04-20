// @ts-check
import eslint from '@eslint/js'
import tsESLint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default tsESLint.config(
    {
        ignores: ['**/dist/*', 'node_modules/*'],
        languageOptions: {
            globals: {
                ...globals.node
            }
        },
        extends: [eslint.configs.recommended, prettierRecommended],
        rules: {
            'prettier/prettier': ['warn']
        }
    },
    {
        files: ['packages/**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        extends: tsESLint.configs.recommendedTypeChecked
    }
)
