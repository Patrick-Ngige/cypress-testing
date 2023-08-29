/// <reference types="cypress" />

it('Installing plugins', () => {

  cy
    .visit('board/20028236889');

  cy
  .get('[data-cy=task]')
  .eq(0)
  .click()

  cy
  .get('.dropzone')
  .attachFile('logo.png', {subjectType: 'drag-n-drop'})
  
});