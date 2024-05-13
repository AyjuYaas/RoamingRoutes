import "./AboutUs.css";
import Title from "../Title";
import img from "./about.jpeg";

export default function AboutUs() {
  return (
    <div className="about-us" id="about">
      <Title first="About" last="Us" />
      <div className="content">
        <div className="about-img">
          <img src={img} alt="Beach Image" />
        </div>
        <div className="description">
          <h1>Explore The Difference</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            rem molestiae est dignissimos nisi suscipit aut in blanditiis autem,
            cumque exercitationem quos doloremque perferendis earum, voluptatum
            minus quisquam placeat numquam.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
