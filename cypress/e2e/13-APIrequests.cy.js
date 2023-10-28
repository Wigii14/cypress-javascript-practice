describe('Intercepting API(Spying) requests after clicking on a button', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}redirector`)
        cy.get('a#redirect').click()
        cy.intercept('GET',`${Cypress.env('theInternet')}redirector`).as('linkStatus')
    });
    
    it('API Call', () => {
        cy.get("a[href='status_codes/200']").click()
        cy.wait('@linkStatus').then((request) => {
            cy.log('This is the request intercepted', request)
            expect(request.response.statusCode).to.eq(200)
            expect(request.body).to.have.length(0)
            expect(request.response.statusMessage).to.have.text('Created')
        })

        /* cy.request(`${Cypress.env('theInternet')}redirector`).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.length(0)
            //expect(response).to.have.property('')
            //expect(response).to.have.property('')
        })*/
    });
});