describe('Article tests', () => {
  it('should create a new article', () => {
    cy.intercept("GET", "**/api/articles*", { fixture: "articles.json"}).as("GetArticles"); // acá hago un mock de la respuesta de la API, y le doy un alias

    cy.login("commit");

    cy.wait("@GetArticles"); // compruebo que se ejecutó el fixture y se complete la llamada
  });
});
