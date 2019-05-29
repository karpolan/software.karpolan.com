import { shuffle } from '../utils';

/**
 * Loads data for all products from "/data/all.json" file.
 * @param {Function} callback - Use this.setState().bind(this) or similar.
 * @param {String} property - Name of property in this.state object to load data.
 */
export const getAllData = (callback, property = 'data') => {
  fetch('/data/all.json')
    .then((response) => response.json())
    .then((data) => {
      // Shuffle the list of products
      shuffle(data);
      // Call data setting callback as success
      callback({
        loaded: true,
        [property]: data,
      });
    })
    .catch((error) => {
      console.error(error);
      // Call data setting callback as fail
      callback({
        error: true,
        [property]: {},
      });
    });
}; // getAllData()

/**
 * Loads data for single product from `/data/${id}/schema.json` file.
 * @param {String} id - Name of product in "abc-xyz" format.
 * @param {Function} callback - Use this.setState().bind(this) or similar.
 * @param {String} property - Name of property in this.state object to load data.
 */
export const getData = (id, callback, property = 'data') => {
  fetch(`/data/${id}/schema.json`)
    .then((response) => response.json())
    .then((data) => {
      // Call data setting callback as success
      callback({
        loaded: true,
        id: id,
        [property]: data,
      });
    })
    .catch((error) => {
      console.error(error);
      // Call data setting callback as fail
      callback({
        error: true,
        id: id,
        [property]: {},
      });
    });
}; // getData()
