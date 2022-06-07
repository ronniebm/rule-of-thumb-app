import axios from 'axios';
import { calculateVotes } from '../assets/helpers';

const baseUrl = 'http://localhost:3001';

/* getCharacters() : will get all characters data from the given API.
-------------------------------------------------------------------*/
export const getCharacters = async ( setCharacters ) => {
  await axios
        .get(`${baseUrl}/data`)
        .then(({ data }) => {
          setCharacters( data );
        })
}

/* putUserVote() : will update a single character data trought API.
-------------------------------------------------------------------*/
export const putUserVote = async (
  thumb,
  setThumb,
  character,
  setCharacter,
  setParams,
  setVoted
) => {
  if (thumb === null) {
    alert('Please choose a hand');
    return;
  }

  character.votes[`${thumb}`] = character.votes[`${thumb}`] + 1;

  await axios
    .put(`${baseUrl}/data/${character.id}`, character)
    .then(({ data }) => {
      setThumb(null);
      setCharacter(character);
      setParams(calculateVotes(data.votes));
      localStorage.setItem(`rule-of-thumb-id-${character.id}`, 'voted');
      setVoted(true);
    });
};
