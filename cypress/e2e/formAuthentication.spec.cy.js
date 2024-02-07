import * as constants from "../utils/constants"

describe('Form Authentication Tests', () => {

  beforeEach( function () {
    cy.visit(constants.formAuthentication, {responseTimeout: 60000})
    cy.get("[class='example'] h2").should('have.text', 'Login Page')
    cy.log(`Visited ${constants.formAuthentication}`)
    cy.wait(1000)
  })

  it('Form Authentication - Login Success', { retries: 1 }, () => {

    cy.get("[id='username']").type("tomsmith")
    cy.get("[id='password']").type("SuperSecretPassword!")
    cy.get("[type='submit']").click()

    cy.get("[class='example'] h2").should("contain", "Secure Area")

    cy.get("[href='/logout']").click()

    cy.get("[class='example'] h2").should('have.text', 'Login Page')

    cy.wait(2000)
  })

  it('Form Authentication - With Invalid UserName', { retries: 1 }, () => {

    cy.get("[id='username']").type("testing")
    cy.get("[id='password']").type("SuperSecretPassword!")
    cy.get("[type='submit']").click()

    cy.get("[id='flash']").should("contain", "Your username is invalid!")

    cy.wait(2000)
  })

  it('Form Authentication - With Invalid Password', { retries: 1 }, () => {

    cy.get("[id='username']").type("tomsmith")
    cy.get("[id='password']").type("testing")
    cy.get("[type='submit']").click()

    cy.get("[id='flash']").should("contain", "Your password is invalid!")

    cy.wait(2000)
  })

})