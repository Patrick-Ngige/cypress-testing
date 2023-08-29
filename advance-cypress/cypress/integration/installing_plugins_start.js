/// <reference types="cypress" />

it('Installing plugins', () => {

  cy
    .visit('/');

  cy
  .get('[data-cy=board-item]')
  .realHover('have.css', 'background-color', 'rgb(5, 90, 140)')
  
  cy
  .eyesOpen({
    appName: 'Cypress testing',
    testName: 'JavaScript test',
    browser: {width: 800, height: 600},
  });

  cy
  .eyesCheckWindow('Main Page')

  cy
  .eyesClose()

});