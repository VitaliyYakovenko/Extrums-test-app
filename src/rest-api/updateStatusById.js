import { BASE_URL } from "./getAllIdeas";


export function updateStatusById(id) {
     
     return fetch(`${BASE_URL}/api/ideas/${id}/status`,{
          method: "PATCH",
          body: JSON.stringify({status: "selected"}),
          headers: {
               "Content-Type": "application/json; charset=UTF-8"
          },
     })
     .then(resp => resp.json())
     .catch(error => error.message)
}