export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? <span>Limit! Buy pro for {">"}5</span> : "Fancy Counter"}
    </h1>
  );
}
