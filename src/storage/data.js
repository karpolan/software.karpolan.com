import { shuffle } from '../utils';

export const getAllData = (callback, property = 'data') => {
  fetch('/data/all.json')
    .then(response => response.json())
    .then(data => {
  		// Shuffle the list of products
			shuffle(data);
      // Call data setting callback
      callback({ [property]: data });
    });
}

export const getData = (id, callback, property = 'data') => {
  fetch(`/data/${id}/schema.json`)
    .then(response => response.json())
    .then(data => {
      callback({
        id: id,
        [property]: data
      });
    });
}

