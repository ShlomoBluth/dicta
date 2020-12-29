
Cypress.Commands.add("contactUsFormTest",(language)=>{
  let title,name,email,message,buttonText
  if(language=='Hebrew'){
    title='צרו קשר'
    name='שם'
    email='דואר אלקטרוני [שדה חובה]'
    message='תאור'
    buttonText='שלח'
  }else if(language=='English'){
    title='Contact Us'
    name='Name'
    email='E-mail'
    message='Description'
    buttonText='Send'
  }
  cy.setLanguageMode(language)
  cy.get('div[id="dropdown-header"]').should('have.attr','class','dropdown closed') 
  cy.get('a[id="contactUsButton"]').click()
  cy.get('div[id="dropdown-header"]').should('have.attr','class','dropdown')
  .within(() => {
    cy.get('form').should('have.attr','action','https://formspree.io/dicta@dicta.org.il')
    cy.get('h1').should('contain',title)
    cy.get('input[name="name"]').should('have.attr','placeholder',name).and('have.attr',
      'required','required')
    cy.get('input[name="_replyto"]').should('have.attr','placeholder',
      email).and('have.attr','required','required')
    cy.get('textarea[name="message"]').should('have.attr','placeholder',message).and('have.attr',
      'required','required')
    cy.get('button[type="submit"]').should('contain',buttonText)    
  })
})

Cypress.Commands.add("contactUsFormSubmit",(language,name,email,message)=>{
  cy.setLanguageMode(language)
  cy.get('div[id="dropdown-header"]').should('have.attr','class','dropdown closed') 
  cy.get('a[id="contactUsButton"]').click()
  cy.get('div[id="dropdown-header"]').should('have.attr','class','dropdown')
  .within(()=>{
    cy.get('form').within(()=>{
    cy.get('input[name="name"]').invoke('val', name)
    cy.get('input[name="_replyto"]').type(email)
    cy.get('textarea[name="message"]').invoke('val', message)
    cy.get('button').click()
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain('https://formspree.io/dicta@dicta.org.il')
    })   
    })
  })
})

Cypress.Commands.add('textMessageTest',(fieldName,message)=>{
  cy.get('div[id="dropdown-header"]').within(()=>{
    cy.get('[name="'+fieldName+'"]').then(($input) => {
      expect($input[0].validationMessage).to.contain(message)
    })
  })
})

Cypress.Commands.add('sectionInHomePageTest',(Sectionname, language,url,numberOfButton)=>{
  cy.setLanguageMode(language)
    let count=0
    cy.get('div[class*='+Sectionname+']').children().each(($el)=>{
      if($el.is('a')){
        count++
        cy.get($el).should('have.attr', 'target', '_blank').
        and('have.attr', 'href',url)
      } else if($el.is('div[class*="product-description"]')){
        cy.get($el).children('a').not('[id*="DemoLink"]').then(()=>{
          count++
        })
        .should('have.attr', 'target', '_blank').
        and('have.attr', 'href',url)
      }
    }).then(()=>{
      expect(count).equal(numberOfButton)
    })
})


import 'cypress-file-upload';



Cypress.Commands.add('setLanguageMode',(language)=>{
  cy.get('body').then(elem => {
    let languageMode
    if(language=='Hebrew'){
      languageMode='he'
    }else if(language=='English'){
      languageMode=''
    }
    let classAttr = elem.attr("class").substring(0,2);
    if(classAttr!=languageMode)
    {
      cy.get('a').contains(/^English$/||/^עברית$/).click();
    }
    if(languageMode=='he'){
      cy.get('a').contains(/^English$/).should('exist')
    } else{
      cy.get('a').contains(/^עברית$/).should('exist')
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

Cypress.Commands.add('citationBadRequest',(language,message)=>{
  cy.visit('https://citation.dicta.org.il/')
  cy.setLanguageMode(language)
  cy.intercept('POST', '/api', {
    statusCode: 500
  })
  cy.get('textarea[id="textEntryArea"]').type('משה קיבל תורה')
  cy.get('[id="findInstancesBttn"]').click().then(()=>{
  cy.get('.modal-body').within(()=>{
    cy.get('span').should('be.visible').invoke('text')
      .should('contain',message)
    })
  })
})  

  