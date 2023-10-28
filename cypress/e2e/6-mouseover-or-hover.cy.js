
describe('Hover Test', () => {
    beforeEach(() => {
        cy.visit('/mouseover');
    });

    it('Click Me should be visible', () => {
        cy.get('.text-primary')
            .should('be.visible')
            .should('have.css','color','rgb(0, 123, 255)')
            .trigger('mouseover')
        cy.get('.text-warning')
            .trigger('mouseover')
            .should('be.visible')
            .should('have.css','color','rgb(255, 193, 7)')
    });

    it.only('Click Me Hover', () => {
        cy.get('.text-primary')
            .should('be.visible')
            .should('have.css','color','rgb(0, 123, 255)');
        cy.get('.text-primary').realHover()
        //cy.get('.text-primary')
            .should('be.visible')
            .should('have.css','color','rgb(255, 193, 7)')
    });
});