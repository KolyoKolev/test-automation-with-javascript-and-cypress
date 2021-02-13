import { BASE_URL, HTML, PHP } from '../constants';

const formatUrl = (path, fileType) => {
  switch (fileType) {
    case HTML:
      return `${BASE_URL}${path}.${HTML}`;
    case PHP:
      return `${BASE_URL}${path}.${PHP}`;
    default:
      return new Error(cy.log('Check the url format. Must be wrong!'));
  }
};

export default formatUrl;
