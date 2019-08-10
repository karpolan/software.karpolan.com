/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */

/**
 * Shuffles array in place. ES6 version.
 * @param {Array} a - array containing all items to shuffle.
 */
export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
