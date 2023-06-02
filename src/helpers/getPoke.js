import { fetchData } from "../requests/fetch";


export async function getPoke(id) {
    const resp = await fetchData(id);
    const body = await resp.json();
    return body;
}