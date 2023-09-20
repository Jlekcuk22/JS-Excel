module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    node: 1,
    es6: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    semi: "off",
    "comma-dangle": "off",
    "require-jsdoc": "off",
    "linebreak-style": 0,
    "operator-linebreak" : "off",
    "padded-blocks": 0,
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  },
};
