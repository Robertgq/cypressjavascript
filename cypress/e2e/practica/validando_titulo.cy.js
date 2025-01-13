/// <reference types="Cypress" />   
describe("validando titulo", () => { 

    it("test validar titulo de la pagina ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.log("ok la funcion tittle funciono bien")
  
    })


}) // cierre de describe