describe('Basics', () => {
    beforeEach(() => {
        cy.visit('/textinput')
    });
    
    it('Get URL', () => {
        //use then for mathematic operations or if we are going to change most of the functioons
        //for assertions, use should
        cy.url().then(($url) => {
            cy.log("Printing the URL: " + $url);
        })
        //expect.should('eq','http://uitestingplayground.com/textinput')
        cy.url().should('eql','http://uitestingplayground.com/textinput')
    });

    it('Get title', () => {
        cy.title().should('eq','Text Input')
    });

    it('Get button', () => {
        //if element has id, use # then id value, ex: id="newButtonName" => #newButtonName 
        cy.get('input#newButtonName').type('Input challenge')
        cy.get('button#updatingButton').click()
        .should('have.text','Input challenge')
    });
});