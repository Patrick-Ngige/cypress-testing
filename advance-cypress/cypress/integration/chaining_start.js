/// <reference types="cypress" />

beforeEach(() => {
  cy
    .visit('/board/2305140181')
})

it('Chaining commands', () => {

  cy.contains('milk')

  cy
    .get('[data-cy="task"]')
    .eq(1)
    .should('have.text','milk')


});