const elementsPage = require('../pages/ElementsPage');

describe('Elements Tests', () => {
  it('should fill Text Box form', () => {
    elementsPage.visit();
    elementsPage.clickTextBox();
    elementsPage.fillTextBox('John', 'john@example.com', '123 Street', '456 Avenue');
    cy.get('#output').should('contain', 'John');
  });
});
