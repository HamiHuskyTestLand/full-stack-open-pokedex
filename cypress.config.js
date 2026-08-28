const { defineConfig } = require('cypress')12324

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    specPattern: 'e2e-tests/**/*.cy.js'
  }
})
