/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => {
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({appName: 'Cypress Testing', batchName: 'Using Applitools'}))
    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Using Cypress')
        todoPage.addTodo('Using Applitools')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})