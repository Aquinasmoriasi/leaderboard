export default class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  static displayScores(scores) {
    const list = document.querySelector('.recent-scores ul');
    for (let i = 0; i < scores.length; i += 1) {
      list.innerHTML += `<li>${scores[i].name}: ${scores[i].score}</li>`;
    }
  }
}