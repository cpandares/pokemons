import { fetchData } from "../requests/fetch";



export async function editPoke({ id, name, image, attack, defense, hp, type, id_author:idAuthor  }) {
    
    try {
        
        const resp = await fetchData(`${id}`, { name, image, attack, defense, hp, type, idAuthor }, "PUT");
        const body = await resp.json();
        return body;
    } catch (error) {
        console.log(error)
    }
   
}