import formatUrl from '../utils/formatUrl';
import pathnames from '../constants/pathnames';
import { HTML, PHP } from '../constants';
import * as selectors from '../selectors';

describe('Basic javascript validation test page', () => {
  before('load the Basic javascript validation page', () => {
    cy.visit(formatUrl(pathnames.basicJavaScriptValidationPage, HTML));
  });

  it('should check the value of the first item', () => {
    cy.get(selectors.BASIC_JAVASCRIPT_VALIDATION_TEST_PAGE.INPUT_FIELD)
      .type('Hello world')
      .get(selectors.BASIC_JAVASCRIPT_VALIDATION_TEST_PAGE.INPUT_SUBMIT)
      .click()
      .url()
      .should('include', formatUrl(pathnames.theFormProcessorPage, PHP));
  });
});
