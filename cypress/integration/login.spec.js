/// <reference types="cypress" />

describe("Login test cases", () => {
  it("should display error when credentials are invalid", () => {
    // cy.visit("/"); // agarra la baseUrl del cypress.json, o sea que sería http://localhost:3000/

    // cy.contains("Sign in").click();

    // cy.get('[data-cy="email-input"]').type("commit@studio.com");
    // cy.get('[data-cy="password-input"]').type("invalidPasswfsjldhf{enter}"); // así le hago el enter para que haga submit
    // // alternativa al {enter} cy.get("[data-cy='login-form']").submit;

    // cy.contains("[data-cy='error-messages-list']", "email or password is invalid"); // le digo que contenga el texto en X elemento que le paso en el primer parámetro
    cy.login("adkjfhd");
  });

  it('should log in', () => {
    cy.login("commit")
  });
});
