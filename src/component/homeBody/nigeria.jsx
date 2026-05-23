import data from "../../../movies.json";

const Nigerias = ({ title, image, date, genre }) => {
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

const DisplayNigeria = ({ data }) => {
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
        <Nigerias
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

const Nigeria = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h3>Top 10 in Nigeria Today</h3>
        </div>

        <div>
          <DisplayNigeria
            data={data.filter((data) => data.name === "nigeria")}
          />
        </div>
      </div>
    </div>
  );
};

export default Nigeria;
