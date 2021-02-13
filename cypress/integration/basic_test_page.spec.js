import formatUrl from '../utils/formatUrl';
import pathnames from '../constants/pathnames';
import { HTML } from '../constants';
import * as selectors from '../selectors';

describe('Basic test page', () => {
  before('load the basic test page', () => {
    cy.visit(formatUrl(pathnames.basicWebPage, HTML));
  });

  it("should assert the H1 text value using selectors' abstraction", () => {
    cy.get(selectors.BASIC_TEST_PAGE.PAGE_H1_HEADING).should(
      'have.text',
      'Basic Web Page Example'
    );
  });

  it('should assert the H1 text value using direct search via cypress find method', () => {
    cy.get(selectors.BASIC_TEST_PAGE.PAGE_BODY)
      .find('h1')
      .should('have.text', 'Basic Web Page Example');
  });

  it('should assert the number of paragraphs on the page', () => {
    cy.get(selectors.BASIC_TEST_PAGE.PARAGRAPH).should('have.length', 4);
  });

  it('should assert the text value of the last paragraph on the page', () => {
    cy.get(selectors.BASIC_TEST_PAGE.PARAGRAPH)
      .first()
      .invoke('text')
      .should(
        'include',
        'Very simple web pages have a structure illustrated by this page. And elements can have id and class attributes for styling and locating'
      );
  });

  it('should assert the color of the explanation section', () => {
    cy.get(selectors.BASIC_TEST_PAGE.EXPLANATION_SECTION).should(
      'have.css',
      'background-color',
      'rgb(240, 248, 255)'
    );
  });

  it('should navigate back and forth through the navigation', () => {
    cy.get(selectors.BASIC_TEST_PAGE.NAVIGATION_INDEX_LINK)
      .click()
      .url()
      .should('include', formatUrl(pathnames.indexPage, HTML))
      .go('back')
      .url()
      .should('include', formatUrl(pathnames.basicWebPage, HTML));
  });

  it('should assert for redirects in the footer', () => {
    cy.get(selectors.BASIC_TEST_PAGE.FOOTER).within((footer) => {
      cy.get(footer)
        .find('p')
        .first()
        .find('a')
        .last()
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://compendiumdev.co.uk')
        .and('have.text', 'Compendium Developments');
    });
  });
});
