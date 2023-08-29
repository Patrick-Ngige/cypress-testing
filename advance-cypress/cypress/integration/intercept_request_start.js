/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
  .intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('createBoard')

  cy
    .visit('/')
  
  cy
  .get('[data-cy=create-board')
  .click()

  cy
  .get('[data-cy=new-board-input')
  .type('launching a rocket{enter}')

  cy
  .wait('@boardList')
  .its('response.statusCode')
  .should('eq', 200)

  cy
    .get('[data-cy=board-item]')
    .should('have.length', 1)

});