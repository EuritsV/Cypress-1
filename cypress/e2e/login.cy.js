describe('Login in the Page ', () => {
  it('Login successfully' , () => {
	   cy.visit("/")
     cy.url().should('include','orangehrmlive.com')

       cy.get('input[placeholder="Username"]').type(Cypress.env('username'))
       cy.get('input[type="password"]').type(Cypress.env('password'))
       cy.get('button[type="submit"]').click()
       cy.get('.oxd-text.oxd-text--h6').should('contain','Dashboard')
	})

    it('Login unsuccessful - negative test!' , () => {
      cy.visit("/")
      cy.get('input[placeholder="Username"]').type(Cypress.env('username'))
      cy.get('input[type="password"]').type('teste123')
      cy.get('button[type="submit"]').click()
      cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('contain','Invalid credentials')

      })

})