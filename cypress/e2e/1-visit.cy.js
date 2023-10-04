describe('Basics', () => {
    beforeEach(() => {
        cy.visit('/textinput')
    });
    
    it('Get URL', () => {
        cy.url().then(($url) => {
            cy.log("Printing the URL: " + $url);
        })
    });
});