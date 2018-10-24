module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: false
    }
  },
  testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
  setupTestFrameworkScriptFile: require.resolve("./jest.setup.js"),
  collectCoverageFrom: ["**/src/**/*.ts", "**/src/**/*.tsx"],
  moduleNameMapper: {
    "\\.png$": require.resolve("./tests/png-mock"),
    "\\.svg$": require.resolve("./tests/svg-mock")
  }
};
