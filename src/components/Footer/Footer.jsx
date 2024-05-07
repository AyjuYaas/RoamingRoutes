import SocialLinks from "../NavBar/items/SocialLinks";
import PageLinks from "../NavBar/items/PageLinks";
import "./footer-styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <PageLinks />
      <SocialLinks />
      <p>Copyright © Sayujya 2024. All Rights Reserved</p>
    </div>
  );
}
