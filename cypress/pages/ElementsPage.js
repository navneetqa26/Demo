class ElementsPage {
  visit() {
    cy.visit('https://demoqa.com/text-box');
  }

  clickTextBox() {
    cy.contains('Text Box').click();
  }

  fillTextBox(name, email, current, permanent) {
    cy.get('#userName').type(name);
    cy.get('#userEmail').type(email);
    cy.get('#currentAddress').type(current);
    cy.get('#permanentAddress').type(permanent);
    cy.get('#submit').click();
  }
}
module.exports = new ElementsPage();
