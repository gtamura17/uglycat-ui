import parser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser,
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-console": "warn",
    },
  },
];

