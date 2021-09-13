/// <reference types='cypress'/>

const FORM_TEST_PAGE = './pages/form/index.html';

const SELECTORS = {
  inputField1: '[data-test="test-input-1"]',
  inputField2: '[data-test="test-input-2"]',
  inputField3: '[data-test="test-input-3"]',
  submitBtn: '[data-test="submit-btn"]',
};

describe('Client side form validation', () => {
  beforeEach('load form test page', () => {
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

  it('should check the validity of the first input field when text is typed in it', () => {
    cy.get(SELECTORS.inputField1)
      .type('test')
      .then((inputs) => inputs[0].checkValidity())
      .should('be.true');
  });

  it('should check the presence of validation error message of the first input when field is left empty', () => {
    cy.get(SELECTORS.submitBtn).click();
    cy.get(SELECTORS.inputField1)
      .invoke('prop', 'validationMessage')
      .should('eq', 'Test field 1 should not be left empty');
  });

  it('should check the lack of validation error message of the first input when text is typed in the field ', () => {
    cy.get(SELECTORS.inputField1)
      .type('test')
      .get(SELECTORS.submitBtn)
      .click()
      .get(SELECTORS.inputField1)
      .invoke('prop', 'validationMessage')
      .should('eq', '')
      .get(SELECTORS.inputField2)
      .invoke('prop', 'validationMessage')
      .should('eq', 'Test field 2 should not be left empty');
  });
});
