export default class GameController {
  constructor(gameElement) {
    this.gameElement = gameElement;
    this.scoreElement = gameElement.querySelector('.results .score');
    this.missElement = gameElement.querySelector('.results .miss');
  }

  init() {
    this.score = 0;
    this.miss = 0;

    this.gameElement.addEventListener('click', (event) => {
      const col = event.target.closest('.col');
      if (col) {
        const gameplay = col.querySelector('.head');
        if (gameplay) {
          this.hit();
          gameplay.remove();
        }
      }
    });
  }

  hit() {
    this.score += 1;
    this.scoreElement.innerText = this.score;
  }

  missed() {
    this.miss += 1;
    this.missElement.innerText = this.miss;
  }
}
