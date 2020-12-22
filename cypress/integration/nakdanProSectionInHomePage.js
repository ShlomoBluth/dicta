/// <reference types="cypress"/>

//run tests on the nakdan pro section in dicta home page some in hebrew mode and english mode
//some will succeed and some will fail

describe('NakdanProSectionInHomePage',()=>{

  beforeEach(() => {
    cy.visit('https://dicta.org.il/')
  })

//Need to go through all the cookies in the firefox browser and clear after each test otherwise 
//a error will pop up and the tests will not continue to run 
  afterEach(() => {
    cy.clearAllCookies();
  })

  it('Links in the nakdan-pro section in hebrew mode have 3 nakdanpro urls and open in a new tab',()=>{
    cy.sectionInHomePageTest('nakdan-pro','Hebrew','https://nakdanpro.dicta.org.il/',2)
  })

  it('Links in the nakdan-auto section in english mode have 3 nakdanpro urls and open in a new tab',()=>{
    cy.sectionInHomePageTest('nakdan-pro','English','https://nakdanpro.dicta.org.il/',2)
  })

  it('Links in the nakdan-auto section in hebrew mode have 4 nakdanpro urls and open in a new tab',()=>{
    cy.sectionInHomePageTest('nakdan-pro','Hebrew','https://nakdanpro.dicta.org.il/',3)
  })

  it('Links in the nakdan-auto section in english mode have 4 nakdanpro urls and open in a new tab',()=>{
    cy.sectionInHomePageTest('nakdan-pro','English','https://nakdanpro.dicta.org.il/',3)
  })

  it('Links in the nakdan-auto section in hebrew mode have wrong nakdanpro url and open in a new tab',()=>{
    cy.sectionInHomePageTest('nakdan-pro','Hebrew','https://nnakdanpro.dicta.org.il/',2)
  })

  it('Links in the nakdan-pro section in english mode have wrong nakdanpro url and open in a new tab',()=>{
    cy.sectionInHomePageTest('nakdan-pro','English','https://nnakdanpro.dicta.org.il/',2)
  })

})   
