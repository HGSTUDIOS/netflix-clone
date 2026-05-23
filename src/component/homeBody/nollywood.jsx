import data from "../../../movies.json";

const Nollywoods = ({ title, image, date, genre }) => {
  return (
    <div>
      <div>
        <div style={{}}>
          <img
            style={{width: "120px"}}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const DisplayNollywood = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        gap:"10px", 
        alignItems: "center",
        overflowX: "scroll",
        overflowY: "hidden",
        marginLeft: "20px",
        marginTop: "20px",
      }}
    >
      {data.map((movies) => (
        <Nollywoods
          key={movies.id}
          title={movies.title}
          image={movies.image}
          date={movies.date}
          genre={movies.genre}
        />
      ))}
    </div>
  );
};

const Nollywood = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h3>Nollywood Movies & TV</h3>
        </div>

        <div>
          <DisplayNollywood
            data={data.filter((data) => data.name === "nollywood")}
          />
        </div>
      </div>
    </div>
  );
};

export default Nollywood;
