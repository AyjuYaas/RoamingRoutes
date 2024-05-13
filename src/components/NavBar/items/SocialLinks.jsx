import { socialLinks } from "./data";

export default function SocialLinks(props) {
  const { responsive } = props;
  return (
    <ul className="sociallinks">
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          onClick={responsive}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </ul>
  );
}
