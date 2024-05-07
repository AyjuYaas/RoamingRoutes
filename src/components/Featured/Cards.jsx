export default function Cards(props) {
  const { image, date, title, info, location, duration, cost } = props;
  return (
    <div className="cards">
      <div className="card-img">
        <img src={image} alt={title} />
        <span>{date}</span>
      </div>
      <div className="card-description">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <div className="card-footer">
        <span>
          <i className="fas fa-map"></i> &nbsp;
          {location}
        </span>
        <span>Rs. {cost}</span>
        <span>{duration}&nbsp;days</span>
      </div>
    </div>
  );
}
