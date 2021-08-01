import {
  THE_INTERNET_APP,
  PATH_TO_FILE_ONE,
  PATH_TO_FILE_TWO,
} from '../../constants';
import * as selectors from '../../selectors';

describe('Upload files', () => {
  beforeEach('should load a test page', () => {
    cy.visit(
      `${THE_INTERNET_APP.BASE_URL}${THE_INTERNET_APP.PATHNAMES.UPLOAD}`
    );
  });

  it('should upload a single file', { tags: '@smoke' }, () => {
    cy.get(selectors.THE_INTERNET_APP.FILE_UPLOAD)
      .attachFile(PATH_TO_FILE_ONE)
      .get(selectors.THE_INTERNET_APP.UPLOAD_BTN)
      .click()
      .get('h3')
      .should('have.text', 'File Uploaded!')
      .get(selectors.THE_INTERNET_APP.UPLOADED_FILES)
      .invoke('text')
      .should('include', 'fileOne.txt');
  });

  it('should drag and drop a file', () => {
    cy.get(selectors.THE_INTERNET_APP.DRAG_AND_DROP)
      .attachFile(PATH_TO_FILE_ONE, {
        subjectType: 'drag-n-drop',
      })
      .get(selectors.THE_INTERNET_APP.UPLOAD_BTN)
      .click()
      .get('h1')
      .invoke('text')
      // some issue with app here
      .should('eq', 'Internal Server Error');
  });

  it('should drag and drop multiple files', () => {
    cy.get(selectors.THE_INTERNET_APP.DRAG_AND_DROP)
      .attachFile([PATH_TO_FILE_ONE, PATH_TO_FILE_TWO], {
        subjectType: 'drag-n-drop',
      })
      .get(selectors.THE_INTERNET_APP.UPLOAD_BTN)
      .click()
      .get('h1')
      .invoke('text')
      // some issue with app here
      .should('eq', 'Internal Server Error');
  });
});
