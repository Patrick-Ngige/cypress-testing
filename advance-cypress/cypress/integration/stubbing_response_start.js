/// <reference types="cypress" />

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    },{
      forceNetworkError: 'true'
    }).as('createBoard')

  cy
    .visit('/')

});