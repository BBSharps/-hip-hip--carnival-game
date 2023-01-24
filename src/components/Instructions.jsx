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
    <main>
      <h1>Game Instructions</h1>
      <section className="Instructions-menu">
        <Link to="/instructions/01"> Part 1</Link>
        <Link to="/instructions/02"> Part 2</Link>
        <Link to="/instructions/03"> Part 3</Link>
        <Link to="/instructions/04"> Part 4</Link>
      </section>
      <p>{instructions}</p>
    </main>
  );
}
