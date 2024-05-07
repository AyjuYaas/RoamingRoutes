import { pageLinks } from "./data";

export default function PageLinks() {
  return (
    <ul className="pagelinks">
      {pageLinks.map((page) => (
        <a key={page.id} href={page.href}>
          {page.text}
        </a>
      ))}
    </ul>
  );
}
