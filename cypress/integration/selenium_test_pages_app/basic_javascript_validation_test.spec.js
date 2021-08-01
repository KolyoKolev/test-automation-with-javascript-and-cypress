import formatUrl from '../../utils/formatUrl';
import { SELENIUM_TEST_PAGES_APP, HTML, PHP } from '../../constants';
import * as selectors from '../../selectors';

describe('Basic javascript validation test page', () => {
  before('load the Basic javascript validation page', () => {
    cy.visit(
      formatUrl(
        SELENIUM_TEST_PAGES_APP.BASE_URL,
        SELENIUM_TEST_PAGES_APP.PATHNAMES.BASIC_JAVA_SCRIPT_VALIDATION_PAGE,
        HTML
      )
    );
  });

  it('should check the value of the first item', () => {
    cy.get(
      selectors.SELENIUM_TEST_PAGES_APP.BASIC_JAVASCRIPT_VALIDATION_TEST_PAGE
        .INPUT_FIELD
    )
      .type('Hello world')
      .get(
        selectors.SELENIUM_TEST_PAGES_APP.BASIC_JAVASCRIPT_VALIDATION_TEST_PAGE
          .INPUT_SUBMIT
      )
      .click()
      .url()
      .should(
        'include',
        formatUrl(
          SELENIUM_TEST_PAGES_APP.BASE_URL,
          SELENIUM_TEST_PAGES_APP.PATHNAMES.THE_FORM_PROCESSOR_PAGE,
          PHP
        )
      );
  });
});
