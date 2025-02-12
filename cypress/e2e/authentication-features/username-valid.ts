import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the new account project representative page', () => {
  cy.visit('/www/_html/new-accountProject-representative.html');
});

When('the user enters "validuser_123" in the username field', () => {
  cy.get('#username').type('validuser_123');
});

Then('the username validation message should display "✅ The username is valid."', () => {
  cy.get('#newAccount-projRep-errorInUsername').should('contain', '✅ The username is valid.');
});

