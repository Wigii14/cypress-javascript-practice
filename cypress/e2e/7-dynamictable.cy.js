describe('Dynamic Tables', () => {
    beforeEach(() => {
        cy.visit('/dynamictable')
    });

    it('Get Chrome CPU Load', () => {
    
        cy.get("div[role='row'] span").each(($cell) => {
            if($cell.text().includes('Chrome')){
                cy.log(`I have found the ${$cell.text()} row!`)
                const chromeValue = [];
                chromeValue.push($cell.next().text())
                chromeValue.push($cell.next().next().text())
                chromeValue.push($cell.next().next().next().text())
                chromeValue.push($cell.next().next().next().next().text())
                cy.log(chromeValue)
                chromeValue.forEach((chromeValue) => {
                    if(chromeValue.includes('%')){
                        cy.log(`The CPU Load of Chrome is: ${chromeValue}`)
                        cy.get('.bg-warning').should('have.text', `Chrome CPU: ${chromeValue}`)
                    }
                })
            }
            })

            //cy.log($cell.text())
        });
    });