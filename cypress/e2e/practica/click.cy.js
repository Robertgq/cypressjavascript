/// <reference types="Cypress" />   
require('cypress-plugin-tab')
describe("introduction to clicks", () => { 

    it("ntroduction clicks", () => { 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
        cy.wait(100)
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click()
  
    })


}) // cierre de describe