describe('AutoComplete Test', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}auto-complete`)
    });
    
    it('Autocomplete', () => {
        cy.get('#react-select-2-option-0').first().type('Y')
    });
});