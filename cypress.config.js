const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  blockHosts: ["https://events.backtrace.io"],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
