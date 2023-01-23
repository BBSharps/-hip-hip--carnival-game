import Phaser from "phaser";
import logo from "../assets/logo.png";

class PlayGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  preload() {
    console.log(localStorage.getItem("../assets/logo.png"));
    let data = new Image();
    data.src = dataURI;

    this.textures.addBase64("logo", dataURI, data);

    this.load.image("logo", logo);
  }
  create() {
    this.add.image(100, 100, "logo");
  }
}

export default PlayGame;
