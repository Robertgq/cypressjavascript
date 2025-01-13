describe("curso de cypress", () => { 

    it("Primer test case", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.wait(1000)
        cy.get("#userName").type("Robert")
        cy.wait(4000)
        



    })


}) // cierre de describe