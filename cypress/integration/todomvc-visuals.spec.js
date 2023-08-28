/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => {
    before(() => todoPage.navigate())

    it('should look good', () => {
        todoPage.addTodo('Using Cypress')
        todoPage.addTodo('Using Applitools')

        todoPage.toggleTodo(0)
    })
})