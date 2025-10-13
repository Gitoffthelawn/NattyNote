import js from "@eslint/js";
import json from "eslint-plugin-json";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  {
    ignores: ["build/**", "dist/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        chrome: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
      quotes: ["error", "backtick"],
    },
  },

  {
    files: ["**/*.json"],
    ...json.configs.recommended,
  },

  prettier,
];
