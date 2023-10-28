describe('Link Challenge', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}links`)
    });
    
    it('Open New tab', () => {
        cy.get('#simpleLink').should('have.attr','href','https://demoqa.com')
        cy.get('#simpleLink').should('have.attr','target','_blank') //_blank will open a new tab
    });

    it.only('Delete the target', () => {
        cy.get('#simpleLink').invoke('removeAttr','target').click()
        cy.url().then((url)=>{
            expect(url).to.be.eq('https://demoqa.com/')
        })
    });
    
    it('API Call', () => {
        cy.request(`${Cypress.env('demoQA')}created`).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.length(0)
            //expect(response).to.have.property('')
            //expect(response).to.have.property('')
        })
    });
});