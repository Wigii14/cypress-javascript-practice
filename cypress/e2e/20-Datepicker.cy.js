Cypress.config("pageLoadTimeout", 100000);

describe('Datepicker', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}date-picker`)
    });

    it('Date Picker Demo', () => {
        cy.get('#datePickerMonthYearInput').click()
        cy.get('.react-datepicker__month-select').select('10')
        cy.get('.react-datepicker__year-select').select('1997')
        cy.findByText('14').click()
    });
});