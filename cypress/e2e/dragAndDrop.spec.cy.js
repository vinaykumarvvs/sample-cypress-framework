import * as constants from "../utils/constants"

describe('Drag And Drop Tests', () => {

  beforeEach( function () {
    cy.visit(constants.dragAndDrop, {responseTimeout: 60000})
    cy.get("[class='example'] h3").should('have.text', 'Drag and Drop')
    cy.log(`Visited ${constants.dragAndDrop}`)
    cy.wait(1000)
  })

  it('Drag A on Top of B', { retries: 1 }, () => {

    const dataTransfer = new DataTransfer()
    cy.get("[id='column-a']").trigger('dragstart', { dataTransfer })
    cy.get("[id='column-b']").trigger('drop', { dataTransfer })
    
    cy.get("[id='column-a']").should('have.text', 'B')
    cy.get("[id='column-b']").should('have.text', 'A')

    cy.wait(2000)
  })

  it('Drag B on Top of A', { retries: 1 }, () => {

    const dataTransfer = new DataTransfer()
    cy.get("[id='column-b']").trigger('dragstart', { dataTransfer })
    cy.get("[id='column-a']").trigger('drop', { dataTransfer })
    
    cy.get("[id='column-a']").should('have.text', 'B')
    cy.get("[id='column-b']").should('have.text', 'A')

    cy.wait(2000)
  })

})