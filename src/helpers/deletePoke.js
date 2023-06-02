import { fetchData } from "../requests/fetch";



export async function deletePoke(id) {
    const resp = await fetchData(`${id}`, {}, "DELETE");
    const body = await resp.json();
    return body;
}