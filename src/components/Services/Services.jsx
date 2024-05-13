import "./Services.css";
import { services } from "./servicesData";
import IndividualServices from "./IndividualServices";
import Title from "../Title";

export default function Services() {
  return (
    <div className="services" id="services">
      <Title first="Our" last="services" />
      <div className="i-services">
        {services.map((service) => (
          <IndividualServices key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
