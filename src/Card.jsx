import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButtons from "./CountButtons";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton />
      <CountButtons setCount={setCount} />
    </div>
  );
}
