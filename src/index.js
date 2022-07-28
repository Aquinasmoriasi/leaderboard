import './style.css';
import { leaderBoard } from './modules/scores.js';
import Scores from './modules/display.js';

// const add = document.querySelector('#add');
const form = document.querySelector('form');
const refresh = document.getElementById('refresh');
const score = document.getElementById('score');
const user = document.getElementById('user');
const newUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vX6tyJpGukeqHjTXq1bA/scores/';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  leaderBoard(user.value, Number(score.value));
  form.reset();
});

refresh.addEventListener('click', async () => {
  const storedScores = await fetch(newUrl);
  const response = await storedScores.json();
  Scores.displayScores(response.result);
});

document.addEventListener('DOMContentLoaded', async () => {
  const storedScores = await fetch(newUrl);
  const response = await storedScores.json();
  Scores.displayScores(response.result);
});
