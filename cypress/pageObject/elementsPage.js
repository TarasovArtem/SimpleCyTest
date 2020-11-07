/// <reference types="cypress" />

class ElementPage {

    /*Header*/
    headerNavbar() {
       return cy.get('.navbar-brand');
    }

    headerNavbarContent() {
        return cy.get('.justify-content-end > .navbar');
    } 
    
    headerNavbarChild1() {
        return cy.get(':nth-child(1) > .nav-link');
    }

    headerNavbarChild2() {
        return cy.get(':nth-child(2) > .nav-link');
    }

    headerNavbarChild3() {
        return cy.get(':nth-child(3) > .nav-link');
    }

    /*Chart*/
    dataTopic() {
        return cy.contains('The data: a random selection of Coronavirus tweets');
    }
    cardHeaderData1() {
        return cy.contains('Corona & Twitter: A love story');
    }
    chartData1() {
        return cy.get('#vis_chart_id_0_0 > .chart-wrapper > .marks');
    }

    cardHeaderData2() {
        return cy.get(':nth-child(2) > :nth-child(2) > .row > :nth-child(1) > .card > .card-header');
    }
    chartData2() {
        return cy.get('#vis_chart_id_1_0 > .chart-wrapper > .marks');
    }

    cardHeaderData3() {
        return cy.get(':nth-child(2) > :nth-child(2) > .row > :nth-child(2) > .card > .card-header');
    }
    chartData3() {
        return cy.get('#vis_chart_id_1_1 > .chart-wrapper > .marks');
    }

    chart4Topic() {
        return cy.get('');
    }
    chart4() {
        return cy.get('');
    }

    chart6Topic() {
        return cy.get('');
    }
    chart6() {
        return cy.get('');
    }

    chart7Topic() {
        return cy.get('');
    }
    chart7() {
        return cy.get('');
    }

    chart8Topic() {
        return cy.get('');
    }
    chart8() {
        return cy.get('');
    }

    chart9Topic() {
        return cy.get('');
    }
    chart9() {
        return cy.get('');
    }

    chart10Topic() {
        return cy.get('');
    }
    chart10() {
        return cy.get('');
    }



}
export default ElementPage