import Phaser from "phaser";
import PlayGame from "./PlayGame";

export class CreateGame extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      parent: "phaser-container",
      width: 1504,
      height: 896,
      scene: [PlayGame],
    };
    super(config);
  }
}
