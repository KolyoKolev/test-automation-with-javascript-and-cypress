const fileOnePath = 'docs/fileOne.txt';
const fileTwoPath = 'docs/fileTwo.txt';
const baseURL = 'https://the-internet.herokuapp.com/upload';
const fileUploadInput = '#file-upload';
const uploadButton = '#file-submit';
const dragAndDrop = '#drag-drop-upload';

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

  it('should drag and drop a file', () => {
    cy.get(dragAndDrop)
      .attachFile(fileOnePath, {
        subjectType: 'drag-n-drop',
      })
      .get(uploadButton)
      .click()
      .get('h1')
      .invoke('text')
      // some issue with app here
      .should('eq', 'Internal Server Error');
  });

  it('should drag and drop multiple files', () => {
    cy.get(dragAndDrop)
      .attachFile([fileOnePath, fileTwoPath], {
        subjectType: 'drag-n-drop',
      })
      .get(uploadButton)
      .click()
      .get('h1')
      .invoke('text')
      // some issue with app here
      .should('eq', 'Internal Server Error');
  });
});
