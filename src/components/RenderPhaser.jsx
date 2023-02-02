const height = window.visualViewport.height;
const width = window.visualViewport.width;
console.log(height, width);
function RenderPhaser() {
  return (
    <iframe
      src="https://carnival-conduct-game.netlify.app/"
      name="Carnival-Conduct-Play"
      title="Carnival-Conduct-Play-Game"
      width={width}
      height={height}
    ></iframe>
  );
}
export default RenderPhaser;
