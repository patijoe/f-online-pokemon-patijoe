const petition = (url) => fetch(url).then(response => response.json());

export {petition};