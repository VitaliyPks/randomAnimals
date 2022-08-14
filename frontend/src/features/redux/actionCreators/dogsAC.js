import NEW_DOG from '../actionTypes/dogsAT';

export default function newDog(payload) {
  return {
    type: NEW_DOG,
    payload,
  };
}
