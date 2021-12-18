function getUrl(endpoint: string) {
  const baseUrl = 'http://localhost:7000/';
  const finalUrl = baseUrl + endpoint;
  return finalUrl;
}

export default getUrl;