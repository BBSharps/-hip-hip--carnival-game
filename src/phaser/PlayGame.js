import Phaser from "phaser";

class PlayGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }

  create() {
    this.add.text(100, 100, "hello world");
  }
}

export default PlayGame;
