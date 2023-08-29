require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
import "cypress-real-events/support";
// commands.js
import "@applitools/eyes-cypress/commands"


Cypress.Commands.add('addBoard', (input) => {

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type(input + '{enter}');

})