export const BASE_URL = `https://6481bf9329fa1c5c5031fa88.mockapi.io/api/v1`


export  function getAllIdeas() {
    return fetch(`${BASE_URL}/todo-app`)
    .then(resp => resp.json())
    .catch(error => error.message)
};


