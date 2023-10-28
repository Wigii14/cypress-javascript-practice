describe('Click Tests', () => {
    beforeEach(() => {
        cy.visit('/click');
    });

    it('Button is visible', () => {
        cy.get('#badButton').should('be.visible');
    });

    it('Click then button turns green', () => {
        cy.get('#badButton')
            .should('have.css','background-color','rgb(0, 123, 255)')
            .click()
            .should('have.css','background-color','rgb(40, 167, 69)')
    }); 
});