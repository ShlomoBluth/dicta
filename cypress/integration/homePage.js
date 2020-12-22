/// <reference types="cypress"/>

//run tests on the dicta home page some in hebrew mode and english mode
//some will succeed and some will fail

describe('HomePage',()=>{

    beforeEach(() => {
      cy.visit('https://dicta.org.il/')
    })
  
  //Need to go through all the cookies in the firefox browser and clear after each test otherwise 
  //a error will pop up and the tests will not continue to run 
    afterEach(() => {
      cy.clearAllCookies();
    })
  
    it('Link in the contactUsButton in hebrew mode have the right url and open in a new tab',()=>{
      cy.setLanguageMode('Hebrew') 
      cy.get('a[id="contactUsButton"]').should('have.attr', 'target', '_blank').
      and('have.attr', 'href','ghjk')
    })
})