export class TodoPage{
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh')   
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    validateTodoTxt(todoIndex, expectedText) {
    cy.get(`.todo-list:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
        
    }
    toggleTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }
    showOnlyCompletedTodos() {
        cy.contains('Completed').click()
    }
    showOnlyActiveTodos() {
        cy.contains('Active').click()   
    }
    showAllTodos() {
        cy.contains('All').click()   
    }
}