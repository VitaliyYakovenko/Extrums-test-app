import { BASE_URL } from "./getAllIdeas";





export function getAllSelectedIdeas() {
    return fetch(`${BASE_URL}/api/ideas/?page=1&limit=40`)
    .then(resp => resp.json())
    .catch(error => error.message)
}