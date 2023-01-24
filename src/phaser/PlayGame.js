import Phaser from "phaser";
import car from "../assets/test.png";
import grass from '../assets/carnivalTiles.png'

class PlayGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
   
  }
  preload() {
    this.load.image("logo", car);
    this.load.image('grass', grass)

  }
  create() {
   this.add.image(752, 448,'grass')

  }
}

export default PlayGame;
