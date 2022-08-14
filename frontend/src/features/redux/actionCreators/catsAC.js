import NEW_CAT from '../actionTypes/catsAT';

export default function newCat(payload) {
  return {
    type: NEW_CAT,
    payload,
  };
}
