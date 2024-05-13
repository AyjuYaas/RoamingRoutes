export default function IndividualServices(props) {
  const { icon, title, text } = props;
  return (
    <div className="service-components">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
