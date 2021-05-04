export default {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["prettier", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { varsIgnorePattern: "(^jsx$)" },
        ],
      },
    },
  ],
};
