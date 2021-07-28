/* eslint-disable jest/valid-expect */
/// <reference types="Cypress" />

describe('Products - main page', function () {
  it('Should display products page', () => {
    cy.visit(Cypress.env('host'));
    cy.location().should((location) => expect(location.href).to.eq(Cypress.env('host')));
  });

  it('Should handle search input', () => {
    cy.visit(Cypress.env('host'));
    cy.get('input[name=search]').type('Phrase');
    cy.url().should('include', 'search');
    cy.get('input[name=search]').clear();
    cy.url().should('not.include', 'search');
  });

  it('Should handle filters', () => {
    cy.visit(Cypress.env('host'));
    cy.get('input[name=active]').click();
    cy.url().should('include', 'active=1');
    cy.get('input[name=active]').click();
    cy.url().should('not.include', 'active');

    cy.get('input[name=promo]').click();
    cy.url().should('include', 'promo=1');
    cy.get('input[name=promo]').click();
    cy.url().should('not.include', 'promo');
  });

  it('Should handle pagination', () => {
    cy.visit(Cypress.env('host'));
    cy.get('li>button').contains('3').click();
    cy.url().should('include', 'page=3');
  });

  it('Should display placeholder and hide pagination when no products were returned', () => {
    cy.intercept(`${Cypress.env('api')}/products*`, []).as('getProducts');
    cy.visit(Cypress.env('host'));
    cy.get('div[aria-label=products-not-found]').should('be.visible');
  });

  it('Should handle params from url', () => {
    cy.visit(`${Cypress.env('host')}?page=3&promo=1&active=1`);
    cy.get('input[name=active]').should('be.checked');
    cy.get('input[name=promo]').should('be.checked');
    cy.get('nav').contains(3).should('have.class', 'text-blue-primary');
  });
});
