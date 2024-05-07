import Title from "../Title";
import "./featured-styles.css";
import Cards from "./Cards";
import { tours } from "./data";

export default function Featured() {
  return (
    <div className="featured" id="tours">
      <Title first="featured" last="tours" />
      <div className="tours-collection">
        {tours.map((tour) => (
          <Cards {...tour} key={tour.id} />
        ))}
      </div>
    </div>
  );
}
