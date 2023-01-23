import Phaser from "phaser";
import PlayGame from "./PlayGame";

export class CreateGame extends Phaser.Game {
  constructor(height, width) {
    const config = {
      type: Phaser.AUTO,
      parent: "phaser-container",
      width: width,
      height: height,
      scene: [PlayGame],
    };
    super(config);
  }
}
