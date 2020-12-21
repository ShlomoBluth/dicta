Cypress.Commands.add('homePageSection',(language,url,numberOfButton)=>{
  cy.setLanguageMode(language)
    let count=0
    cy.get('div[class*="nakdan-auto"]').children().each(($el)=>{
      if($el.is('a')){
        count++
        cy.get($el).should('have.attr', 'target', '_blank').
        and('have.attr', 'href',url)
      } else if($el.is('div[class*="product-description"]')){
        cy.get($el).children('a').not('[id="nakdanDemoLink"]').then(()=>{
          count++
        })
        .should('have.attr', 'target', '_blank').
        and('have.attr', 'href',url)
      }
    }).then(()=>{
      expect(count).equal(numberOfButton)
    })
})



Cypress.Commands.add('setLanguageMode',(language)=>{
  cy.get('body').then(elem => {
    let languageMode
    if(language=='Hebrew'){
      languageMode='he'
    }else if(language=='English'){
      languageMode=''
    }
    let classAttr = elem.attr("class");
    if(classAttr!=languageMode)
    {
      cy.get('a').contains(/^English$/||/^עברית$/).click();
    }
    cy.get('body').should('have.attr','class',languageMode)
  })
})

Cypress.Commands.add('clearAllCookies', () => {
    if (Cypress.isBrowser('firefox')) {
      cy.getCookies({ log: false }).then((cookies) =>
        cookies.forEach((cookie) => cy.clearCookie(cookie.name, { log: false })),
      );
      cy.log('clearCookies');
    } else {
      cy.clearCookies();
    }
  })