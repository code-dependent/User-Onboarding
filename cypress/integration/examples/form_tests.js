import {v4 as uuid} from 'uuid';

const name = uuid().slice(0,6);
const emailinvalid = `acb@gmailcom`;
const email = `acb@gmail.com`;
const password = uuid().slice(0,6);

describe('Form Page', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000/')
      cy.url().should('include', 'localhost')
    })
    // name
    it('cause name validation error', ()=>{
      cy.get('[name=name]')
        .type('a')
        .should('have.value', 'a')
        
    })
    it('Found Name Validation Error', ()=>{
      cy.get('[name=errors]')
        .contains('Name Must Consist of, at Least, TWO Characters')
    })
    it('fix name validation error', ()=>{
      cy.get('[name=name]')
        .clear()
        .type(name)
        .should('have.value', name)
    })
    it('No Name Validation Error Found', ()=>{
      cy.get('[name=errors]')
        .should('have.value', '')
    })
      // ///////////////////////////////////
//     emaiil
    it('cause Email validation error 1/2', ()=>{
      cy.get('[name=email]')
        .type(emailinvalid)
        .should('have.value', emailinvalid)
        
    })
      
    it('found Email Validation Error 1/2', ()=>{
      cy.get('[name=errors]')
        .contains('Please Enter a VALID Email Address')
    })
    it('cause Email validation error 2/2', ()=>{
      cy.get('[name=email]')
        .clear()
        .should('have.value', '')
        
    })
    it('found Email Validation Error 2/2', ()=>{
      cy.get('[name=errors]')
        .contains('An Email Address is Required')
      })
    it('fix email validation error', ()=>{
      cy.get('[name=email]')
        .type(email)
        .should('have.value', email)
    })
      it('no email error exists', ()=>{
        cy.contains('Please Enter a VALID Email Address')
          .should('not.exist')
    })
      /////////////////////////////////////

// password
    it('cause password validation error', ()=>{
        cy.get('[name=password]')
          .type('2d')
          .should('have.value', '2d')
    })
      
    it('found password Validation Error', ()=>{
        cy.get('[name=errors]')
          .contains('Password Must Be, at Least, SIX Characters Long')
    })
    it('fix password validation error', ()=>{
      cy.get('[name=password]')
        .clear()
        .type(password)
        .should('have.value', password)
    })
    it('no password error exists', ()=>{
      cy.contains('Password Must Be, at Least, SIX Characters Long')
        .should('not.exist')
    })
////////////////////////////////////////

    
    

    
    it('can select from dropDown role field',()=>{
      cy.get('[name=role]')
      .select('DS Engineer')
    })
    it('can select from dropDown role field',()=>{
      cy.get('[name=role]')
      .select('')
    })
      ///////////////////////////
      // checkbox/TERMS
    it('can select and click terms checkbox',()=>{
      cy.get('[name=terms]')
      .click()
    })
    it('can select and click terms checkbox',()=>{
      cy.get('[name=terms]')
      .click()
    })
    it('found terms error', ()=>{
      cy.get('[name=errors]')
        .contains('Must Accept Terms and Conditions')
    })
    it('can select and click terms checkbox',()=>{
      cy.get('[name=terms]')
      .click()
    })
    it('can select and click terms checkbox',()=>{
      cy.contains('Must Accept Terms and Conditions')
      .should('not.exist')
    })
//////////////////////////////


})