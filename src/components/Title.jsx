export default function Title(props) {
  return (
    <article className="title">
      <span className="first">{props.first} &nbsp;</span>
      <span className="last">{props.last}</span>
    </article>
  );
}
