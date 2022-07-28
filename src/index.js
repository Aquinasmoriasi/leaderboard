import './style.css';
import { leaderBoard } from './modules/scores.js';
import Scores from './modules/display.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh');
const newUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xr0xjbx2eIUnctoz8aGY/scores/';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { user, score } = form;
  const newScore = { user: user.value, score: score.value };
  leaderBoard(newScore);
  form.reset();
});

refresh.addEventListener('click', async () => {
  const storedScores = await fetch(newUrl);
  const response = await storedScores.json();
  Scores.displayScores(response.result);
});