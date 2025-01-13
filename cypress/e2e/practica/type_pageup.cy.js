/// <reference types="Cypress" />   
// para que funcione los comandos 
describe("Funciones para type pageup", () => { 

    it("Type enter type up", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
       // cy.get("#APjFqb").type("Cypress io {enter}")
       cy.get('#userName').type("{pageup}")
       cy.wait(2000)
    
    })

    it("Type enter type up", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
       // cy.get("#APjFqb").type("Cypress io {enter}")
       cy.get('#userName').type("{pagedown}") //ejemplo 
       cy.wait(2000)
    
    })

    it.only("Type enter type only", () => { // solo corre ese test 
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
       // cy.get("#APjFqb").type("Cypress io {enter}")
       cy.get('#userName').type("{pageup}")
       cy.wait(2000)
    
    })


}) // cierre de describe