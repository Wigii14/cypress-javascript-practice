Cypress.config("defaultCommandTimeout", 25000);

describe('Retry Ability Demo', () => {
    it('Visit with delay', () => {
        cy.visit('/loaddelay', {timeout:5000})
    });
    
    it('Client Side Delay', () => {
        cy.visit('/clientdelay')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success').should('be.visible').should('have.text','Data calculated on the client side.')
    });

    it.only('Progress Bar', () => {
        cy.visit('/progressbar');
        cy.get('#startButton').click();
        cy.get('#progressBar').should('have.text','75%');
        cy.get('#stopButton').click();
    });
});