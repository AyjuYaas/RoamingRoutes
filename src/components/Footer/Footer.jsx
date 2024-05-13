import SocialLinks from "../NavBar/items/SocialLinks";
import PageLinks from "../NavBar/items/PageLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <PageLinks />
      <SocialLinks />
      <p>Copyright © Sayujya 2024. All Rights Reserved</p>
    </div>
  );
}
