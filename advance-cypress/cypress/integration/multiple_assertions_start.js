/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/2305140181')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .then( item => {
      expect(item[0]).to.contain.text('milk')
      expect(item[1]).to.contain.text('bread')
    })
  

})