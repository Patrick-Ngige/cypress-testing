/// <reference types="cypress" />

Cypress.Commands.add('take', {prevSubject: 'optional'}, (subject, input) => {
  
  if (subject) {
    cy
    .wrap(subject)
    .find(`[data-cy=${input}]`)
  }

  cy
  .get(`[data-cy=${input}]`)
})

it('Custom commands', () => {

  cy
    .visit('/board/20028236889');

  cy
  .take('list')
  .eq(0)
  .take('task')

});