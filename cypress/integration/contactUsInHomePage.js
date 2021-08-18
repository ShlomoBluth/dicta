/// <reference types="cypress"/>

//run tests on the dicta contact us in the home page some in hebrew mode and english mode

describe('ContactUsInHomePage',()=>{
  let inboxId;
  let emailAddress;

  before(()=>{
    inboxId = 'cf72a11c-bad1-409e-983a-2d90eeed757d';
    emailAddress = 'cf72a11c-bad1-409e-983a-2d90eeed757d@mailslurp.com';
  })

  beforeEach(() => {
    cy.visitpage({url:'https://dicta.org.il/'})
  })

//Need to go through all the cookies in the firefox browser and clear after each test otherwise 
//a error will pop up and the tests will not continue to run 
  afterEach(() => {
    cy.clearAllCookies();
  })

  it('click on contact us button in hebrew mode opens a contact us form with the right elements',()=>{
    cy.contactUsFormTest('Hebrew')
  })

  it('click on contact us button in english mode opens a contact us form with the right elements',()=>{
    cy.contactUsFormTest('English')
  })

  
  it('Message when name field is empty in hebrew mode',()=>{
    cy.contactUsFormSubmit('Hebrew','',emailAddress,'טסט')
    cy.textMessageTest('name','זהו שדה חובה.')
  })

  it('Message when name field is empty in english mode',()=>{
    cy.contactUsFormSubmit('English','',emailAddress,'test')
    cy.textMessageTest('name','Please fill out this field.')
  })  

  it('Message when email field is empty in hebrew mode',()=>{
    cy.contactUsFormSubmit('Hebrew','שאול',' ','טסט')
    cy.textMessageTest('_replyto','זהו שדה חובה.')
  })

  it('Message when email field is empty in english mode',()=>{
    cy.contactUsFormSubmit('English','Ben',' ','test')
    cy.textMessageTest('_replyto','Please fill out this field.')
  })

  it('Message when email field is invalid in hebrew mode',()=>{
    cy.contactUsFormSubmit('Hebrew','שאול','fghjkl','טסט')
    cy.textMessageTest('_replyto','אני רוצה לכלול \'@\' בכתובת האימייל')
  })


  it('click on contact us button in english mode opens a contact us form with the right elements',()=>{
    cy.contactUsFormSubmit('English','Ben','asdfghjkl;','test')
    cy.textMessageTest('_replyto','Please enter an email address.')
  })

  it('Message when message field is empty in hebrew mode',()=>{
    cy.contactUsFormSubmit('Hebrew','שאול',emailAddress,'')
    cy.textMessageTest('message','זהו שדה חובה.')
  })

  it('Message when message field is empty in english mode',()=>{
    cy.contactUsFormSubmit('English','Ben',emailAddress,'')
    cy.textMessageTest('message','Please fill out this field.')
  })

  it('Url changed on submit the form hebrew mode',()=>{
    cy.contactUsFormSubmit('Hebrew','שאול',emailAddress,'טסט')
  })

})