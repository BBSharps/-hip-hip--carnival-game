import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import instructionsJson from "../instructions.json";

export default function Instructions() {
  const { part } = useParams();

  const [instructions, setInstructions] = useState("");
  useEffect(() => {
    setInstructions(instructionsJson.instructions.parts[`${part}`]);
  }, [part]);

  return (
    <main className="Main">
      <h1 className="Instructions-title">Game Instructions</h1>
      <div className="Instructions-parts">
        <section className="Instructions-menu">
          <Link to="/instructions/01" className="Instructions-link">
            Part 1
          </Link>
          <Link to="/instructions/02" className="Instructions-link">
            Part 2
          </Link>
          <Link to="/instructions/03" className="Instructions-link">
            Part 3
          </Link>
          <Link to="/instructions/04" className="Instructions-link">
            Part 4
          </Link>
        </section>

        <p className="Instructions-content">{instructions}</p>
      </div>
      <Link to="/">
        <button className="Back-home-btn">Back to home</button>
      </Link>
    </main>
  );
}
