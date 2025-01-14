/// <reference types="Cypress" />   
require('cypress-plugin-tab')
describe("first challenge", () => { 

    it("first challenge", () => { // el tabulador
        cy.visit("https://demoqa.com/webtables")
        cy.wait(100)
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Roberto")
        cy.get('#lastName').should("be.visible").type("Gutierrez")
        cy.get('#userEmail').should("be.visible").type("robertogq@gmail.com")
        cy.get('#age').should("be.visible").type(19)
        cy.get('#salary').should("be.visible").type(1800)
        cy.get('#department').should("be.visible").type("QA")
        cy.get('#submit').should("be.visible").click()
        cy.get('#searchBox').should("be.visible").type("Roberto")
        cy.get("#edit-record-4>svg").click()
        cy.get('#firstName').should("be.visible").clear().type("Santiago")
        cy.get('#submit').should("be.visible").click()
        cy.get("#delete-record-4>svg>path").click()



        //cy.get('#userName').type("Santiago").tab().type("gutierrez").tab().type("correo1234gmail.com")
        //cy.log("ok the function tab is working")
  
    })


}) // cierre de describe