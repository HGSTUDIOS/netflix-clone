import bell from "../assets/svg/bellfill.svg";
import fiveNight from "../assets/images/five nights at freddys.jpg";
import data from "../../movies.json";
import NotificationBody from "./notificationBody";
import "./notification.css";

const Movies = ({ title, image, date, genre }) => {
  return (
    <div>
      <div
        className="new"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "3px",
          padding: "1px",
        }}
      >
        <div>
          <img
            style={{ width: "150px", height: "80px", marginLeft: "5px" }}
            src={image}
            alt=""
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p style={{ marginTop: "9px", fontWeight: "bold" }}>New Arrival</p>
          <p style={{ fontSize: "16px", marginTop: "-15px" }}>{title}</p>
          <p style={{ color: "#6e6e6e", marginTop: "-11px" }}>{date}</p>
        </div>
      </div>
    </div>
  );
};

const DisplayMovies = ({ data }) => {
  return (
    <div>
      {data.map((movies) => (
        <Movies
          key={movies.id}
          title={movies.title}
          image={movies.image}
          date={movies.date}
          genre={movies.genre}
          name={movies.name}
        />
      ))}
    </div>
  );
};

const Notification = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", margin: "20px" }}>
        <div
          style={{
            background: "red",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
          }}
        >
          <img
            style={{ marginLeft: "5px", marginTop: "-2px" }}
            src={bell}
            alt=""
          />
        </div>
        <h5 style={{ marginLeft: "2vw", marginTop: "4px" }}>Notifications</h5>
      </div>
      <div>
        <DisplayMovies
          data={data.filter((data) => data.name === "arrival")}
          title="new arrival"
        />
      </div>
      <NotificationBody />
    </div>
  );
};

export default Notification;
