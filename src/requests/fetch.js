

const baseUrl = "https://bp-pokemons.herokuapp.com";


export const fetchData = (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`;  
    if (method === "GET") {
      return fetch(url);
    } else {
      return fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  };