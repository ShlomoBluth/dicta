/// <reference types="cypress"/>

//run tests on a bad requests some in hebrew mode and english mode

describe('BadRequests',()=>{

    it('Message after request failed with status code 500 when clicking the ron butten of citation'+
    ' page in hebrew mode'
    ,()=>{
       cy.citationBadRequest('Hebrew','לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר')
    })

    it('Message after request failed with status code 500 when clicking the ron butten of citation'+
    ' page in english mode'
    ,()=>{
        cy.citationBadRequest('English','Server error. Please try again later')
    })

    it('Message after request failed with status code 500 when clicking the ron butten of nakdan page'
    ,()=>{
        cy.visit('https://nakdan.dicta.org.il/')
        cy.intercept('POST', '/api', {
            statusCode: 500
        })
        cy.get('textarea[placeholder="הזן טקסט כאן"]')
        .type(' משה קיבל תורה מסיניי, ומסרה ליהושוע, ויהושוע לזקנים')
        cy.get('div[class="run-button"]').within(()=>{
            cy.get('button').click().then(()=>{
                cy.get('.modal-body').within(()=>{
                    cy.get('span').should('be.visible').invoke('text')
                    .should('contain','לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר')
                })
            })
        })
    })

    it('Message after request failed with status code 500 when clicking the ron butten of synoptic'+
    ' page'
    ,()=>{
        cy.visit('https://synoptic.dicta.org.il/')
        cy.intercept('POST', '/api', {
            statusCode: 500
        })
        cy.get('input[type="file"]').attachFile('חולין.txt');
        cy.get('input[type="file"]').attachFile('תמיד.txt');
        cy.get('a').contains('Start').click()
        cy.get('p').contains('Server failure. Please try again,'+
        ' if the problem persists please come back later and try again.').should('be.visible')
    })
})