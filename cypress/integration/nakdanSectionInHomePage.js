/// <reference types="cypress"/>

//run tests on the nakdan section in dicta home page some in hebrew mode and english mode
//some will succeed and some will fail

describe('NakdanSectionInHomePage',()=>{

  beforeEach(() => {
    cy.visit('https://dicta.org.il/')
  })

//Need to go through all the cookies in the firefox browser and clear after each test otherwise 
//a error will pop up and the tests will not continue to run 
  afterEach(() => {
    cy.clearAllCookies();
  })

  it('Links in the nakdan-auto section in hebrew mode have 3 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('nakdan-auto','Hebrew','https://nakdan.dicta.org.il/',3)
  })

  it('Links in the nakdan-auto section in english mode have 3 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('nakdan-auto','English','https://nakdan.dicta.org.il/',3)
  })

  it('Links in the nakdan-auto section in hebrew mode have 4 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('nakdan-auto','Hebrew','https://nakdan.dicta.org.il/',4)
  })

  it('Links in the nakdan-auto section in english mode have 4 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('nakdan-auto','English','https://nakdan.dicta.org.il/',4)
  })

  it('Links in the nakdan-auto section in hebrew mode have wrong nakdan url and open in a new tab',()=>{
    cy.homePageSection('nakdan-auto','Hebrew','https://nnakdan.dicta.org.il/',3)
  })

  it('Links in the nakdan-auto section in english mode have wrong nakdan url and open in a new tab',()=>{
    cy.homePageSection('nakdan-auto','English','https://nnakdan.dicta.org.il/',3)
  })

})   
