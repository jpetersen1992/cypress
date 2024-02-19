describe('Home Page Loads', () => {
  beforeEach(() => {
      cy.visit('https://www.peachpayments.com/')
      cy.on('uncaught:exception', () => false);
      cy.wait(5)
      })

  it('Home Page | Validate Sign up & Login', () => {
    cy.get('.signup').should('have.text', 'Sign up').should('be.visible')
    cy.get('.login').should('have.text', 'Log in').should('be.visible');
  })

  it('Sign Up | First Name validation', () => {
    cy.get('.signup').click()
    cy.get('input[name="lastname"]').click().type('TestLastName');
    })
  })