import { BASE_URL } from "./getAllIdeas";


export function doneIdeaById(id, time) {
    return fetch(`${BASE_URL}/api/ideas/${id}/done`, {
        method: "PATCH",
        body: JSON.stringify({"done": true, date: time}),
        headers: {
               "Content-Type": "application/json; charset=UTF-8"
          },            
    }).then(resp => resp.json())
    .catch(error => error.message)
};