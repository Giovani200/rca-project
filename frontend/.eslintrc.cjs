module.exports = {
  extends: ["react-app"],
  env: { browser: true, es2020: true },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {},
    },
  ],
};
