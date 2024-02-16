module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false,
    },
    mime: {
      "text/javascript": ["js"],
    },
    files: [{ pattern: "./src/test.ts", watched: false }],
    preprocessors: {
      "./src/test.ts": ["@angular-devkit/build-angular"],
    },
    browsers: ["Chrome"],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    singleRun: false,
    restartOnFileChange: true,
  });
};
