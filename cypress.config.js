const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://http://localhost:5500',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
