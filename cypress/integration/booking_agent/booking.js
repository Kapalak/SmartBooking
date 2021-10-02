/// <reference types="cypress" />

describe('BOOKING TEST', () => {

  it('BOOKING AGENT', () => {

    cy.clearCookies();   

    cy.visit(Cypress.env('BOOKING_URL'));

    cy.get('[id="header_Booking"]')
      .should('be.visible')
      .should('have.text', Cypress.env('BOOKING_PAGE1_TITLE'))

    cy.screenshot();

    cy.get('[id="planning35227"]')
      .should('be.visible')
      .click();

    cy.screenshot();

    cy.get('.Bbutton')
      .should('be.visible')
      .click();

    cy.screenshot();

    cy.get('#inner_Booking > :nth-child(1)')
      .should('be.visible')
      .should('have.text', Cypress.env('BOOKING_PAGE2_TITLE'));

    cy.screenshot();

    cy.get('#FormBookingCreate')
      .should('be.visible')
      .should('have.text', Cypress.env('BOOKING_PAGE2_TEXT'));
  })
})
