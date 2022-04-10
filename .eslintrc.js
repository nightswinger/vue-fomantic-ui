module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/essential",
      "plugin:@typescript-eslint/recommended",
      "standard"
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "parser": "@typescript-eslint/parser",
      "sourceType": "module"
  },
  "plugins": [
      "vue",
      "@typescript-eslint"
  ]
}
