/// <reference types="cypress" />

describe("My first test", () => {
  it("test case", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click(); // selecciona el primer elemento que diga 'type' cy.contains ya es una aserción, ya que si no encuentra el elemento no lo va a clickear

    // cy.pause();

    // assertion:
    cy.url().should("include", "/commands/actions");

    // cy.screenshot("demo") // guarda un screen en la folder screenshots con el nombre demo

    cy.get(".action-email")
      .type("fake@email.com") // el delay del tipeo
      .should("have.value", "fake@email.com")
      .and("be.visible"); // no tiene mucho sentido este renglón porque si no estuviera visible no hubiera tipado
  });
});
