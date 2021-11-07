/* globals describe, expect, beforeAll, it, cy */

describe('UITest', () => {

    it('UITest', async () => {

        cy.visit('http://localhost:8080')

        cy.get("[data-cy=auswahl]").parent().click();
        cy.get(".v-menu__content").contains("Auswahl 3").click();

        cy.get('[data-cy=wert]').type('Hello World');

        cy.get('button#speichern').click();

        cy.get('[data-cy=result] tbody tr').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('td').eq(1).should('have.text', 'Hello World')
            })
        })


    });

});
