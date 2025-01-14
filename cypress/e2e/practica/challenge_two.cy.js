/// <reference types="Cypress" />   
require('cypress-plugin-tab')
describe("challenge two on the page data base computer", () => { 

    it("creation and filter of items", () => { // el tabulador
        cy.visit("https://computer-database.gatling.io/computers")
        cy.get('h1.fill > .fill').should('be.visible')
        cy.get("#add").should("be.visible").click()
        cy.get('#name').should("be.visible").type("lenovo test")
        cy.get('#introduced').should("be.visible").type("1991-01-01")
        cy.get('#discontinued').should("be.visible").type("2018-01-07")
        cy.get('#company').should("be.visible").select("Lenovo Group")
        cy.get('.primary').should("be.visible").click()
        cy.wait(1000)
        cy.get('#searchbox').should("be.visible").type("lenovo test")
        cy.get('#searchsubmit').should("be.visible").click()
    })


}) // cierre de describe