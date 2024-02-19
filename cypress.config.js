const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920, // Set default viewport width
  viewportHeight: 1080, // Set default viewport height

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

