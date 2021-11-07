/* globals describe, expect, beforeAll, it, cy */

describe('UITest', () => {

    it('UITest', async () => {

        cy.visit('http://localhost:8080')

        /*
        cy.get("[data-cy=auswahl]").parent().click();
        cy.get(".v-menu__content").contains("Auswahl 3").click();

        cy.get('[data-cy=wert]').type('Hello World');

        //cy.get('[data-cy=speichern').click();
        cy.get('button#speichern').click();
        */

        /*
        cy.get('table').should(($tr) => {
            const $tds = $tr.find('td');
            expect($tds.cells.eq(0)).to.contains('Test');
        })
        */

        //cy.get('table').find('tr').eq(1).find('td').eq(0).should('have.text', 'Test')

        cy.get('tbody tr').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('td').eq(1).should('have.text', 'Test') // contains() doesn't work
            })
        })


    });

});
