const { defineConfig } = require("cypress");
const { beforeRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  // Following Reporter Config can be considered only when we run tests sequentially
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Sample Cypress Framework',
    embeddedScreenshots: true
  },
  e2e: {
    video: false, // Make it true, if you need the videos to be recorded
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        await beforeRunHook(details);
      });
    },
  },
});
