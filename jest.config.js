module.exports = {
  // coverageReporters: ["cobertura", "text", "html"],
  // coverageDirectory: "reports/",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  // coverageThreshold: {
  //   global: {
  //     branches: 83.9,
  //     functions: 83.9,
  //     lines: 83.9,
  //   },
  // },
};
