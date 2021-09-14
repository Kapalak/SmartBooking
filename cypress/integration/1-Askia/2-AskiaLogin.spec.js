/// <reference types="cypress" />

describe('002 Askia web tests', () => {

  it('Test login portal', () => {
    cy.visit(Cypress.env('DEVPORTAL_URL'))

    cy.xpath('//a[@title="Askia - Automating insight"]')
        .should('be.visible');

    cy.screenshot();

    cy.get('#account-user')
      .type(Cypress.env('DEVPORTAL_USERNAME'))
      .should('have.value', Cypress.env('DEVPORTAL_USERNAME'));

    cy.screenshot();

    cy.get('#account-password')
      .type(Cypress.env('DEVPORTAL_PASSWORD'))
      .should('have.value', Cypress.env('DEVPORTAL_PASSWORD'));

    cy.screenshot();

    cy.get('#account-submit')
      .click();

    cy.screenshot();

    // cy.get('span.menu-text').invoke('text')
    //   .should('have.value', Cypress.env('DEVPORTAL_NAME'));

    // $('span.menu-text').innerText

    // cy.get('#menu-current-user > span.menu-text')
    //   .should('have.innerText', Cypress.env('DEVPORTAL_NAME'));

    cy.get('#menu-current-user > span.menu-text')
      .should("have.text", Cypress.env('DEVPORTAL_NAME'));
  })
})
