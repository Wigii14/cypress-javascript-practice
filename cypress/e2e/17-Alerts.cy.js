describe('JS Alerts', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}javascript_alerts`)
    });

    it('JS Alert', () => {
        cy.get('button[onclick="jsAlert()"]').should('be.visible').click()
        cy.on('window:alert', (message) => {
            expect(message).to.be.equal("I am a JS Alert");
        })
        cy.on('window:confirm', () => true)
        cy.get('p#result').should('have.text', 'You successfully clicked an alert')
    });

    it('JS Confirm(accept)', () => {
        cy.get('button[onclick="jsConfirm()"]').should('be.visible').click()
        cy.on('window:confirm', (message) => {
            expect(message).to.be.equal("I am a JS Confirm");
        })
        cy.on('window:confirm', () => true)
        cy.get('p#result').should('have.text', 'You clicked: Ok')
    });

    it('JS Confirm(cancel)', () => {
        cy.get('button[onclick="jsConfirm()"]').should('be.visible').click()
        cy.on('window:confirm', (message) => {
            expect(message).to.be.equal("I am a JS Confirm");
        })
        cy.on('window:confirm', () => false)
        cy.get('p#result').should('have.text', 'You clicked: Cancel')
    });

    it('JS Prompt', () => {
        cy.window().then((window) => {
            cy.stub(window,'prompt').returns('This is a Hello World from the prompt alert')
            cy.get('button[onclick="jsPrompt()"]').click()
        })
        
        cy.get('p#result').should('have.text', 'You entered: This is a Hello World from the prompt alert')
    });
});