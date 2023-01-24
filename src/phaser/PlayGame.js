import Phaser from "phaser";
import car from "../assets/test.png";
class PlayGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    this.load.image("logo", car);
  }
  create() {
    this.add.image(100, 100, "logo");
  }
}

export default PlayGame;
