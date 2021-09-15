describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1920, 912)
    
       cy.visit('https://askia.com/')
    
       cy.get('.collapse > .nav > .dropdown:nth-child(2) > .dropdown-toggle > .caret').click()
    
       cy.get('.nav > .open > .dropdown-menu > li:nth-child(2) > a').click()
    
       cy.visit('https://askia.com/field')
    
       cy.get('.intro-message-white > .list-inline > li > .btn > .network-name').click()

       cy.screenshot()    
    })
   
   })
