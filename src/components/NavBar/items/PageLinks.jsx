import { pageLinks } from "./data";

export default function PageLinks(props) {
  const { responsive } = props;
  return (
    <ul className="pagelinks">
      {pageLinks.map((page) => (
        <a key={page.id} href={page.href} onClick={responsive}>
          {page.text}
        </a>
      ))}
    </ul>
  );
}
