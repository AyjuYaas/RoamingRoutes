import { socialLinks } from "./data";

export default function SocialLinks() {
  return (
    <ul className="sociallinks">
      {socialLinks.map((social) => (
        <a key={social.id} href={social.href} target="_blank">
          <i className={social.icon}></i>
        </a>
      ))}
    </ul>
  );
}
