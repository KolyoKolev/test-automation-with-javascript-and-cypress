/// <reference types='cypress'/>

const FORM_TEST_PAGE = './pages/form/index.html';

const SELECTORS = {
  inputField1: '[data-test="test-input-1"]',
  inputField2: '[data-test="test-input-2"]',
  inputField3: '[data-test="test-input-3"]',
  submitBtn: '[data-test="submit-btn"]',
};

describe('Client side form validation', () => {
  before('load form test page', () => {
    cy.visit(FORM_TEST_PAGE);
  });

  it('should check the number of invalid inputs on initial load', () => {
    cy.get('input:invalid').should('have.length', 3);
  });

  it('should check the validity of the first input field when empty', () => {
    cy.get('input:invalid')
      .then((inputs) => inputs[0].checkValidity())
      .should('be.false');
  });
});
