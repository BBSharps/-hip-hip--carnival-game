import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="Main-container">
      <h1 className="Game-title">Carnival Conduct</h1>
      <section className="Links-container">
        <Link to="/playgame" className="Home-page-link">
          Play Game
        </Link>
        <Link to="/instructions" className="Home-page-link">
          Instructions
        </Link>
      </section>
    </main>
  );
}
