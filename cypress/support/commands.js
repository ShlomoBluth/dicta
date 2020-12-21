
Cypress.Commands.add('changeLanguage',()=>{
    cy.get('body').then(elem => {
        let classAttr = elem.attr("class"); 
        //cy.log(score);
        // etc...
        if(classAttr=='he')
      {
        cy.get('a').contains(/^English$/).click();
      }else {
        cy.get('a').contains(/^עברית$/).click();
      }
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