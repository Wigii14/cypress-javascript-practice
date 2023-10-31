describe('Preserve Session', () => {
    beforeEach(() => {
        cy.visit(`https://www.saucedemo.com/`)
    });

    it('Check if session was saved', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contain','text')
    });
});