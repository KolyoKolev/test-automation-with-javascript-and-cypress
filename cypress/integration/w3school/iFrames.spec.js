import { W3SCHOOL_APP } from '../../constants';
import * as selectors from '../../selectors';

Cypress.Commands.add('acceptTermAndConditions', () => {
  cy.get(selectors.W3SCHOOL_APP.ACCEPT_TERMS_AND_CONDITIONS).click();
});

Cypress.Commands.add('getIFrame', () => {
  cy.get(selectors.W3SCHOOL_APP.IFRAME)
    .its('0.contentDocument')
    .its('body')
    .then(cy.wrap);
});

describe('handling iframes', () => {
  it('should verify the h1 of an iframe', () => {
    cy.visit(`${W3SCHOOL_APP.BASE_URL}${W3SCHOOL_APP.PATHNAMES.IFRAME}`)
      .acceptTermAndConditions()
      .getIFrame()
      .find('h1')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'The iframe element');
  });
});
