/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'vX6tyJpGukeqHjTXq1bA';
const identifierUrl = `${url}games/${id}/scores/`;

const leaderBoard = async (user, userScore) => {
  const response = await fetch(identifierUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: `${user}`, score: userScore }),
  });
  const res = await response.json();
  return res.result;
};

export { leaderBoard };