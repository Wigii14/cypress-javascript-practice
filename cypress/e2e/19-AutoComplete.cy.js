describe('AutoComplete Test', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('angular')}demo-site/auto-complete`)
    });
    
    it('Autocomplete', () => {
        cy.get('input#search')
    });
});