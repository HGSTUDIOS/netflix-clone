import data from "../../../movies.json";

const Trendings = ({ title, image, date, genre }) => {
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

const DisplayTrending = ({ data }) => {
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
        <Trendings
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

const Trending = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h3>Trending Now</h3>
        </div>

        <div>
          <DisplayTrending
            data={data.filter((data) => data.name === "top searches")}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
