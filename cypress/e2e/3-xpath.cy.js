describe('', () => {
    beforeEach(() => {
        cy.visit('/classattr')
    });

    it('Find elemements by text', () => {
        // using // double slash origin will make it easier
        //tag
        //* is for all
        
        cy.xpath("//*[text()='Correct variant is']").should("contain.text","Correct")
    });

    it('Find element by attribute', () => {
        cy.xpath('//pre[@class=" language-html"]').should("contain.text","button")
    });
});