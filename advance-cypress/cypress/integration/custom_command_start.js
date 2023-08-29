/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

Cypress.Commands.add('addBoard', (input) => {
  
})

it('Custom commands', () => {

  cy
    .visit('/');

  cy
  .addBoard('groceries')

});