import formatUrl from '../../utils/formatUrl';
import { SELENIUM_TEST_PAGES_APP, HTML } from '../../constants';
import * as selectors from '../../selectors';

describe('Attributes test page', () => {
  before('load the attributes test page', () => {
    cy.visit(
      formatUrl(
        SELENIUM_TEST_PAGES_APP.BASE_URL,
        SELENIUM_TEST_PAGES_APP.PATHNAMES.ATTRIBUTES_PAGE,
        HTML
      )
    );
  });

  it('should assert adding of a dynamic attribute by clicking on a button', () => {
    cy.get(
      selectors.SELENIUM_TEST_PAGES_APP.ATTRIBUTES_TEST_PAGE
        .PARAGRAPH_WITH_DYNAMIC_ATTRIBUTES
    )
      .as('paragraphWithDynamicAttributes')
      .should('have.attr', 'nextid', 1)
      .and('not.have.attr', 'custom-1', 'value-1')
      .and('not.have.attr', 'nextid', 2)
      .get(selectors.SELENIUM_TEST_PAGES_APP.ATTRIBUTES_TEST_PAGE.BUTTON)
      .click()
      .get('@paragraphWithDynamicAttributes')
      .should('have.attr', 'nextid', 2)
      .and('have.attr', 'custom-1', 'value-1');
  });
});
