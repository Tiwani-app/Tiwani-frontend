module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 'off',
    quotes: 'off',
    'react/no-unstable-nested-components': ['warn', {allowAsProps: true}],
  },
};
