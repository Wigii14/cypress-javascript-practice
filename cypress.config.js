const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://uitestingplayground.com',
    env:{
      demoVar: "Hello from the Cypress.Config.JS",
      demoQA: "https://demoqa.com/",
      theInternet: "https://the-internet.herokuapp.com/",
      angular: 'https://www.globalsqa.com/',
    }
    
  },
});
