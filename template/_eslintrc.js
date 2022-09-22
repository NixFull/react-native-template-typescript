module.exports = {
  env: {
    "jest/globals": true,
  },
  root: true,
  extends: ["@react-native-community"],
  plugins: ["jest"],
  rules: {
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "react/require-default-props": ["error"],
    "react/default-props-match-prop-types": ["error"],
    "react/sort-prop-types": ["error"],

    "arrow-parens": [2, "as-needed"],
    "class-methods-use-this": "off",
    "function-paren-newline": "off",
    "global-require": "off",
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "max-len": ["error", 120],
    "no-return-assign": "off",
    "prefer-destructuring": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", "ts", "tsx"] },
    ],
    "react/jsx-props-no-spreading": 2,
    "react/no-typos": "off",
    "react/no-unused-prop-types": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-closing-bracket-location": [
      1,
      {
        nonEmpty: "after-props",
        selfClosing: "line-aligned" || false,
      },
    ],
    "no-use-before-define": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-console": "error",
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
};
