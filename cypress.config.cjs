// cypress.config.js (ES module syntax)
import { defineConfig } from "cypress";
import allureWriter from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
