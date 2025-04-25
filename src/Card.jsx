import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButtons from "./CountButtons";

export default function Card() {
  return (
    <div>
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
}
