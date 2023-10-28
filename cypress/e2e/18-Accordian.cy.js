describe('Accordian Test', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}accordian`)
    });

    it('Default Accordion validation example', () => {
        cy.get('#section2Heading').click()
    });
});