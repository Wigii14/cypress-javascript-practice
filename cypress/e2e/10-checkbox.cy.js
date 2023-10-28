describe('Checkboxes', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}checkbox`)
    });
    
    it('Handling a Checkbox', () => {
        cy.get('input[type="checkbox"]').check({force: true});
        cy.get('#result').should('have.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    });
});

describe.only('Challenge', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}checkboxes`)
    });
    
    it('Handling a Checkbox', () => {
        cy.get('form#checkboxes input').eq(1).should('be.checked');
        cy.get('form#checkboxes input').eq(0).should('not.be.checked');
    });
});