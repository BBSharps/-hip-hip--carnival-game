import { useEffect } from "react";
import { CreateGame } from "../phaser/CreateGame";
function RenderPhaser() {
  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    new CreateGame(height, width);
  }, []);
  return <div id="phaser-container"></div>;
}
export default RenderPhaser;
