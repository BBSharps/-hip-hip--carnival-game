const height = window.visualViewport.height;
const width = window.visualViewport.width;
console.log(height, width);
function RenderPhaser() {
  return (
    <div className="containRender">
      <iframe
        className="render"
        src="https://carnival-conduct-game.netlify.app/"
        name="Carnival-Conduct-Play"
        title="Carnival-Conduct-Play-Game"
        width={1504}
        height={896}
      ></iframe>
    </div>
  );
}
export default RenderPhaser;
