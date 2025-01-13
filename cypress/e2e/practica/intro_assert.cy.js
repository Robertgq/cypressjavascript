/// <reference types="Cypress" />   
require('cypress-plugin-tab')
describe("introduction to assert", () => { 

    it("ntroduction assert", () => { 
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(100)
        cy.get('#userName').should("be.visible").type("Santiago")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("correo12345")
  
    })


}) // cierre de describe