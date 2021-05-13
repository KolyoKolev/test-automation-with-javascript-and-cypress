const fileOnePath = 'docs/fileOne.txt';
const fileTwoPath = 'docs/fileTwo.txt';
const baseURL = 'https://the-internet.herokuapp.com/upload';
const fileUploadInput = '#file-upload';
const uploadButton = '#file-submit';

describe('Upload files', () => {
  beforeEach('should load a test page', () => {
    cy.visit(baseURL);
  });

  it('should upload a single file', () => {
    cy.get(fileUploadInput)
      .attachFile(fileOnePath)
      .get(uploadButton)
      .click()
      .get('h3')
      .should('have.text', 'File Uploaded!')
      .get('#uploaded-files')
      .invoke('text')
      .should('include', 'fileOne.txt');
  });
});
