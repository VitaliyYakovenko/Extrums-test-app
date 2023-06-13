
export const BASE_URL = "https://extrums-backend.onrender.com";


export  function getAllIdeas(page = 1) {
    return fetch(`${BASE_URL}/api/ideas/?page=${page}&limit=5`)
    .then(resp => resp.json())
    .catch(error => error.message)
};


