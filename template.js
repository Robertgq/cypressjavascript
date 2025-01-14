/// <reference types="Cypress" />   
require('cypress-plugin-tab')
describe("function tab", () => { 

    it("function tab", () => { // el tabulador
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(100)
        cy.get('#userName').type("Santiago").tab().type("gutierrez").tab().type("correo1234gmail.com")
        cy.log("ok the function tab is working")
  
    })


}) // cierre de describe