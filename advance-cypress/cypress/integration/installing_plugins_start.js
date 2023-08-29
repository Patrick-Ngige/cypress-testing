/// <reference types="cypress" />

it('Installing plugins', () => {

  cy
    .visit('board/20028236889');

  cy
  .get('[data-cy=task]')
  .eq(0)
  .as('task2')

  cy
  .get('[data-cy=task]')
  .eq(1)
  .as('task1')

  cy
  .get('@task2')
  .drag('@task1')
});