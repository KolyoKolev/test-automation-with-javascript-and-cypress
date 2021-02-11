const BASE_URL = "https://testpages.herokuapp.com/styled/";

const formatUrl = (path) => {
  return `${BASE_URL}${path}.html`;
};

export default formatUrl;
