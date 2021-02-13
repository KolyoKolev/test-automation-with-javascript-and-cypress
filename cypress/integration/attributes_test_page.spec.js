import formatUrl from '../utils/formatUrl';
import pathnames from '../constants/pathnames';
import { HTML } from '../constants';
import * as selectors from '../selectors';

describe('Attributes test page', () => {
  before('load the attributes test page', () => {
    cy.visit(formatUrl(pathnames.attributesPage, HTML));
  });

  it('should assert adding of a dynamic attribute by clicking on a button', () => {
    cy.get(selectors.ATTRIBUTES_TEST_PAGE.PARAGRAPH_WITH_DYNAMIC_ATTRIBUTES)
      .should('have.attr', 'nextid', 1)
      .and('not.have.attr', 'custom-1', 'value-1')
      .and('not.have.attr', 'nextid', 2)
      .get(selectors.ATTRIBUTES_TEST_PAGE.BUTTON)
      .click()
      .get(selectors.ATTRIBUTES_TEST_PAGE.PARAGRAPH_WITH_DYNAMIC_ATTRIBUTES)
      .should('have.attr', 'nextid', 2)
      .and('have.attr', 'custom-1', 'value-1');
  });
});
