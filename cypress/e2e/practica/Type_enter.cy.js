/// <reference types="Cypress" />   
// para que funcione los comandos 
describe("Funciones para type", () => { 

    it("Type enter", () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        cy.wait(1500)
        cy.get("#APjFqb").type("Cypress io {enter}")

  
    })


}) // cierre de describe