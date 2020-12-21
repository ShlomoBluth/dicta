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

  it('Links in the nakdan section in hebrew mode have 3 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('Hebrew','https://nakdan.dicta.org.il/',3)
  })

  it('Links in the nakdan section in english mode have 3 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('English','https://nakdan.dicta.org.il/',3)
  })

  it('Links in the nakdan section in hebrew mode have 4 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('Hebrew','https://nakdan.dicta.org.il/',4)
  })

  it('Links in the nakdan section in english mode have 4 nakdan urls and open in a new tab',()=>{
    cy.homePageSection('English','https://nakdan.dicta.org.il/',4)
  })

  it('Links in the nakdan section in hebrew mode have wrong nakdan url and open in a new tab',()=>{
    cy.homePageSection('Hebrew','https://nnakdan.dicta.org.il/',3)
  })

  it('Links in the nakdan section in english mode have wrong nakdan url and open in a new tab',()=>{
    cy.homePageSection('English','https://nnakdan.dicta.org.il/',3)
  })

  // it('Links in the nakdan section in hebrew mode have wrong nakdan url and open in a new tab',()=>{
  //   cy.get('body').then(elem => {
  //     if(elem.attr("class")==""){
  //       cy.changeLanguage();
  //     }
  //   })
  //   let count=0
  //   cy.get('div[class*="nakdan-auto"]').children().each(($el)=>{
  //     if($el.is('a')){
  //       count++
  //       cy.get($el).should('have.attr', 'target', '_blank').
  //       and('have.attr', 'href','https://nakdan.dicta.org.il/')
  //     } else if($el.is('div[class*="product-description"]')){
  //       cy.get($el).children('a').not('[id="nakdanDemoLink"]').then(()=>{count++})
  //       .should('have.attr', 'target', '_blank').
  //       and('have.attr', 'href','https://nnakdan.dicta.org.il/')
  //     }
  //   })
  //   cy.wait(count).then(()=>{
  //     expect(count).equal(4)
  //   })
  // })

  // it('Links in the nakdan section in english mode have wrong nakdan url and open in a new tab',()=>{
  //   cy.get('body').then(elem => {
  //     if(elem.attr("class")=="he"){
  //       cy.changeLanguage();
  //     }
  //   })
  //   let count=0
  //   cy.get('div[class*="nakdan-auto"]').children().each(($el)=>{
  //     if($el.is('a')){
  //       count++
  //       cy.get($el).should('have.attr', 'target', '_blank').
  //       and('have.attr', 'href','https://nakdan.dicta.org.il/')
  //     } else if($el.is('div[class*="product-description"]')){
  //       cy.get($el).children('a').not('[id="nakdanDemoLink"]').then(()=>{count++})
  //       .should('have.attr', 'target', '_blank').
  //       and('have.attr', 'href','https://nnakdan.dicta.org.il/')
  //     }
  //   })
  //   cy.wait(count).then(()=>{
  //     expect(count).equal(4)
  //   })
  // }) 
})   
