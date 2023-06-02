



/* save pokemon */

import { fetchData } from "../requests/fetch";

export async function savePoke(poke) {

    const resp = await fetchData("?idAuthor=9", poke, "POST");
    const body = await resp.json();
    return body;

}