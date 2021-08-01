import formatUrl from '../../utils/formatUrl';
import { SELENIUM_TEST_PAGES_APP, HTML } from '../../constants';
import * as selectors from '../../selectors';

describe('Table test page', () => {
  before('load the table test page', () => {
    cy.visit(
      formatUrl(
        SELENIUM_TEST_PAGES_APP.BASE_URL,
        SELENIUM_TEST_PAGES_APP.PATHNAMES.TABLE_PAGE,
        HTML
      )
    );
  });

  it('should assert the first column heading value', () => {
    cy.get(selectors.SELENIUM_TEST_PAGES_APP.TABLE_TEST_PAGE.TABLE_ROW)
      .eq(0)
      .within(() =>
        cy.get('th').first().invoke('text').should('equal', 'Name')
      );
  });

  it('should assert the second column heading value', () => {
    cy.get(selectors.SELENIUM_TEST_PAGES_APP.TABLE_TEST_PAGE.TABLE_ROW)
      .eq(0)
      .within(() =>
        cy.get('th').last().invoke('text').should('equal', 'Amount')
      );
  });

  it(
    'should assert the first column first item value',
    { tags: '@smoke' },
    () => {
      cy.get(selectors.SELENIUM_TEST_PAGES_APP.TABLE_TEST_PAGE.TABLE_ROW)
        .eq(1)
        .within(() =>
          cy.get('td').first().invoke('text').should('equal', 'Alan')
        );
    }
  );

  it('should assert the second column first item value', () => {
    cy.get(selectors.SELENIUM_TEST_PAGES_APP.TABLE_TEST_PAGE.TABLE_ROW)
      .eq(1)
      .within(() => cy.get('td').last().invoke('text').should('equal', '12'));
  });
});
