/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

Cypress.Commands.add('addBoard', () => {
  cy
  .get('[data-cy="create-board"]')
  .click()

  cy
  .get('[data-cy=new-board-input]')
  .type('new board{enter}')
})

it('Custom commands', () => {

  cy
    .visit('/');

  cy
  .addBoard()

});