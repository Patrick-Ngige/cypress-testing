/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
  .intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('boardList')

  cy
    .visit('/')

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 0)

});