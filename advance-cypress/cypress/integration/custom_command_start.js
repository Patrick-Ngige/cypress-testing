/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

Cypress.Commands.add('addBoard', (input) => {
  cy
  .get('[data-cy="create-board"]')
  .click()

  cy
  .get('[data-cy=new-board-input]')
  .type(input +'{enter}')
})

it('Custom commands', () => {

  cy
    .visit('/');

  cy
  .addBoard('groceries')

});