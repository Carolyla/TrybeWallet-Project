const apiCoins = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await request.json();
  return requestJson;
};

export default apiCoins;
// fazer uma action, enviar o id ao reducer e fazer um filter !==
