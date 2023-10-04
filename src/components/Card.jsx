// eslint-disable-next-line react/prop-types
const Card = ({ job }) => {
  // eslint-disable-next-line react/prop-types
  const { id, position, company, location, status, type, date } = job;
  const getClassName = () => {
    switch (status) {
      case "Devam Ediyor":
        return "pending";
      case "Red edildi":
        return "rejected";
      case "Mülakat":
        return "interview";
      default:
        return "default";
    }
  };
  return (
    <div className="card" id={id}>
      <div className="header">
        <div className="letter">
          <p>{company[0]}</p>
        </div>
        <div className="info">
          <p>{position}</p>
          <p>{company}</p>
        </div>
      </div>
      <div className="body">
        <div className="field">
          <img src="images/bag.svg" />
          <p>{location}</p>
        </div>
        <div className="field">
          <img src="images/bag.svg" />
          <p>{type}</p>
        </div>
        <div className="field">
          <img src="images/bag.svg" />
          <p>{date}</p>
        </div>
        <div className={ 'status '+ getClassName()}>
          <span>{status}</span>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Card;
