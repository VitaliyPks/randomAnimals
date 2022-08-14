import NEW_INSULT from '../actionTypes/insultsAT';

export default function newInsult(payload) {
  return {
    type: NEW_INSULT,
    payload,
  };
}
