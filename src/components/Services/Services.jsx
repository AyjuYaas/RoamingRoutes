import "./services-styles.css";
import { services } from "./servicesData";
import Iservices from "./Iservices";
import Title from "../Title";

export default function Services() {
  return (
    <div className="services" id="services">
      <Title first="Our" last="services" />
      <div className="i-services">
        {services.map((service) => (
          <Iservices key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
