const formatUrl = (baseUrl, path, fileType) => {
  const FILE_TYPES = {
    HTML: 'html',
    PHP: 'php',
  };

  return FILE_TYPES[fileType]
    ? `${baseUrl}${path}.${FILE_TYPES[fileType]}`
    : new Error(cy.log('Check the url format. Must be wrong!'));
};

export default formatUrl;
