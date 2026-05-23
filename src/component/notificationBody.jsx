import fiveNight from "../assets/images/five nights at freddys.jpg";
import data from "../../movies.json";
import bell_icon from "../assets/svg/bellGray.svg";
import bell from "../assets/svg/bell.svg";
import share_icon from "../assets/svg/share.svg";


const Movies = ({ title, image, date, genre }) => {
  return (
    <div>
      <div>
        <img style={{ width: "100%", height: "30vh" }} src={image} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          marginTop: "10px",
          justifyContent: "end",
          marginRight: "30px",
        }}
      >
        <div>
          <img style={{ marginLeft: "22px" }} src={bell} alt="" />
          <p style={{ fontSize: "14px", color: "gray", fontWeight: "lighter" }}>
            Remind Me
          </p>
        </div>
        <div>
          <img style={{ marginLeft: "5px" }} src={share_icon} alt="" />
          <p style={{ fontSize: "14px", color: "gray", fontWeight: "lighter" }}>
            Share
          </p>
        </div>
      </div>
      <div style={{ margin: "10px", marginBottom: "100px" }}>
        <p style={{ fontSize: "15px", color: "gray", fontWeight: "lighter" }}>
          Season 1 Coming {date}
        </p>
        <h4 style={{ fontWeight: "bolder" }}>{title}</h4>
        <p style={{ fontSize: "15px", color: "gray", fontWeight: "lighter" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          doloremque! Rem soluta consequatur, harum asperiores illum, obcaecati,
          tempora fuga totam eius numquam voluptatibus nulla? Eveniet.
        </p>
        <p
          style={{
            fontWeight: "bolder",
            fontSize: "13px",
            color: "whitesmoke",
          }}
        >
          Steamy . Soapy . Slow Burn . Suspensefull . Teen . Mystery
        </p>
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

const NotificationBody = () => {
  return (
    <div>
      <div>
        <DisplayMovies
          data={data.filter((data) => data.name === "coming soon")}
        />
      </div>
    </div>
  );
};

export default NotificationBody;
