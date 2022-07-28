/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = '8B54FQRLCek3dntQ1aKS';
const identifierUrl = `${url}games/${id}/scores`;

const leaderBoard = async (name, score) => {
  const response = await fetch(identifierUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json, charset="UTF-8"',
    },
    body: JSON.stringify(name, score),
  });
  const res = await response.json();
  return res.result;
};

export { leaderBoard };