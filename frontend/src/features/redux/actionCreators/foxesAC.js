import NEW_FOX from '../actionTypes/foxesAT';

export default function newFox(payload) {
  return {
    type: NEW_FOX,
    payload,
  };
}
