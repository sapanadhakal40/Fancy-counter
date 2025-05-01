import Card from "./Card";
import { useState } from "react";

function App() {
  // const locked = count === 5 ? true : false;
  // const [locked, setLocked] = useState(5);

  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  return (
    <main className={`${locked ? "main--limit" : ""}`}>
      <Card locked={locked} setCount={setCount} count={count} />
    </main>
  );
}

export default App;
