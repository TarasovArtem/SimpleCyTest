/// <reference types="cypress" />


describe('Visual test', () => {
    it('Should open repository and validation elements and texts', () => {
        cy.clearCookies()
        cy.visit('/')
        cy.url().should('include', 'https://nadja-mansurov.github.io/')

        cy.get('.navbar-brand').should('have.text', 'Corona & Twitter: A conversation-trend analysis')
        cy.get('.justify-content-end > .navbar').should('have.text', 'Group 6:')
        cy.get(':nth-child(1) > .nav-link').should('have.text', 'Sakshi Misra')
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Raphael Leuner')
        cy.get(':nth-child(3) > .nav-link').should('have.text', 'Nadja Mansurov')
    })
  })