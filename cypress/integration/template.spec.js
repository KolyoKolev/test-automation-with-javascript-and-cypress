import formatUrl from '../utils/formatUrl';
import pathnames from '../constants/pathnames';
import * as selectors from '../selectors';

describe.skip('Which page is under test', () => {
  before('do something at the beginning of the whole suit', () => {
    cy.visit('particular url');
  });

  beforeEach('do something before every test', () => {
    cy.visit('particular url')
      // e.g. change the window viewport
      .viewport(375, 667);
  });

  it('should assert/check something', () => {
    cy.get('element').should('assert something related to the element');
  });
});
