export default class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  static displayScores(scores) {
    const list = document.querySelector('.recent-scores ul');
    for (let i = 0; i < scores.length; i += 1) {
      scores.sort((a, b) => b.score - a.score);
      list.innerHTML += `<li>${scores[i].user}: ${scores[i].score}</li>`;
    }
  }
}