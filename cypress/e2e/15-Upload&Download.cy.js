describe('Upload a File Test', () => {
    beforeEach(() => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    });

    it('Upload a File', () => {
        //cy.get("input[name='userfile']").selectFile('D:/Automation/Cypress/cypress/fixtures/example.json')
        //cy.get("input[name='userfile']").selectFile('cypress/fixtures/example.json')
        cy.get("input[type='file']").selectFile('cypress/fixtures/project-time-logs (13).xlsx')
        cy.get("input[type='text']").type("This is the report for the project time logs")
        cy.get("input[type='submit']").click()
    });
});