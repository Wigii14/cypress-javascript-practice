describe('CSS Selectors', () => {
    beforeEach(() => {
        cy.visit('/dynamicid')
    });

    it('', () => {
        cy.contains('Button with Dynamic ID').should('have.text','Button with Dynamic ID')
    });

    it('', () => {
        cy.get('div').find('button')
    });

    it('Attribute locator on css selector', () => {

        // # pag id, pag class dot .btn-primary
        cy.get('.btn-primary').should('have.text','Button with Dynamic ID')
    });
});