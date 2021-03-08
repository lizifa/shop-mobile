module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "rules": {
    "arrow-body-style": [
      0,
      "as-needed"
    ],
    "no-console": "off",
    "quotes": [
      "error",
      "single"
    ],
    "generator-star-spacing": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-param-reassign": 0,
    "no-multi-str": "off",
    "no-multiple-empty-lines": [
      "off",
      {
        "max": 1,
        "maxEOF": 0
      }
    ],
    "no-new-func": "off",
    "no-new-object": "off",
    "no-new-require": "off",
    "no-tabs": "off",
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": true
      }
    ]
  },
  "globals": {
    "mapActions": false,
    "mapGetters": false,
    "mapMutations": false,
    "mapState": false
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  }
}
