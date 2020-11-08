/// <reference types="cypress" />

import Navigation from '../../pageObject/navigation';
import ElementPage from '../../pageObject/elementsPage';

describe('Visual test', () => {

    const navigation = new Navigation();
    const elementPage = new ElementPage();
    let nameOfResearch = 'Corona & Twitter: A conversation-trend analysis';
    let groupNumber = 'Group 6:';
    let unit1 = 'Sakshi Misra';
    let unit2 = 'Raphael Leuner';
    let unit3 = 'Nadja Mansurov';
    let textTopicContent = 'The data: a random selection of Coronavirus tweets';
    let cardHeaderData1 = 'Corona & Twitter: A love story';

    beforeEach(()=>{
        navigation.navigate();
        navigation.navUrl().should('include', 'https://nadja-mansurov.github.io/');
        cy.log('Enter')
        
    })
    it('Should show items and items text of header', () => {
        elementPage.headerNavbar().should('have.text', nameOfResearch);
        elementPage.headerNavbarContent().should('have.text', groupNumber);
        elementPage.headerNavbarChild1().should('have.text', unit1);
        elementPage.headerNavbarChild2().should('have.text', unit2);
        elementPage.headerNavbarChild3().should('have.text', unit3);
    })

    it('Should show "The data: a random selection of Coronavirus tweets"', () => {
        elementPage.dataTopic();
        elementPage.cardHeaderData1();
        elementPage.chartData1().should('be.visible');

        elementPage.cardHeaderData2();
        elementPage.chartData2().should('be.visible');
        elementPage.selectChartData2().select('new_cases');
        cy.log('New Cases')
        elementPage.selectChartData2().select('new_deaths');
        cy.log('New Deaths')
        elementPage.selectChartData2().select('new_tests');
        cy.log('New Tests')

        elementPage.cardHeaderData3();
        elementPage.chartData3().should('be.visible');   

    })
  })