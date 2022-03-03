// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (password) => {
  cy.visit("/"); // agarra la baseUrl del cypress.json, o sea que sería http://localhost:3000/

  cy.contains("Sign in").click();

  cy.get('[data-cy="email-input"]').type("commit@studio.com");
  cy.get('[data-cy="password-input"]').type(password + "{enter}");

  cy.get("[data-cy='profile-nav']")
    .should("be.visible")
    .and("contain.text", "commit");
});
