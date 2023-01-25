const height = window.visualViewport.height;
const width = window.visualViewport.width;
console.log(height, width);
function RenderPhaser() {
  return (
    <iframe
      src="https://battle-mage.netlify.app/"
      // srcDoc="<p>Loading ...</p>"
      name="Carnival-Conduct-Play"
      sandbox="allow-scripts"
      title="Carnival-Conduct-Play-Game"
      width={width}
      height={height}
    ></iframe>
  );
}
export default RenderPhaser;
