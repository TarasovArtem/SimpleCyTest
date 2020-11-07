/// <reference types="cypress" />


class Navigation {
    navigate() {
        return cy.visit('/');
     } 
    navUrl() {
      return cy.url()
    }   
}
export default Navigation