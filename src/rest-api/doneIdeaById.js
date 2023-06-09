import { BASE_URL } from "./getAllIdeas";


export function doneIdeaById(id) {
    return fetch(`${BASE_URL}/todo-app/${id}`, {
        method: "PUT",
        body: JSON.stringify({"done": true}),
        headers: {
               "Content-Type": "application/json; charset=UTF-8"
          },            
    }).then(resp => resp.json())
    .catch(error => error.message)
};