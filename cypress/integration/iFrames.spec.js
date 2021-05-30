Cypress.Commands.add('acceptTermAndConditions', () => {
  cy.get('#accept-choices').click();
});

Cypress.Commands.add('getIFrame', () => {
  cy.get('#iframeResult').its('0.contentDocument').its('body').then(cy.wrap);
});

describe('handling iframes', () => {
  it('should verify the h1 of an iframe', () => {
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
      .acceptTermAndConditions()
      .getIFrame()
      .find('h1')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'The iframe element');
  });
});
