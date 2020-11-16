module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:import/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
