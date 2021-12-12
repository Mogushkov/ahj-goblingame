import GameController from './GameController';

export default class GamePlay {
  constructor(gameElement) {
    this.cells = gameElement.querySelectorAll('.col');
    this.gameplayHead = gameElement.querySelector('.head');
    this.game = new GameController(gameElement);
  }

  init() {
    this.gameplayHead.remove();
    this.game.init();
    this.rotate();
  }

  rotate() {
    let previous = 0;
    let rand = 0;

    const gameInterval = setInterval(() => {
      while (rand === previous) {
        rand = Math.floor(Math.random() * (this.cells.length - 1));
      }

      if (this.cells[previous].querySelector('.head')) {
        this.game.missed();
        if (this.game.miss === 3) {
          clearInterval(gameInterval);
          alert('You lose!');
        }
      }

      previous = rand;
      this.cells[rand].appendChild(this.gameplayHead);
    }, 1000);
  }
}