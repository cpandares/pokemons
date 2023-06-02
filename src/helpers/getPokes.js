
import { fetchData } from '../requests/fetch';

const getPokes = async() => {    

    const response = await fetchData("100?idAuthor=9");
    const data = await response.json();
    

  return data

};

export default getPokes;