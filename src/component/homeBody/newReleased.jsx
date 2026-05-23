import data from "../../../movies.json";

const News = ({ title, image, date, genre }) => {
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

const DisplayNew = ({ data }) => {
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
        <News
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

const New = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h3>New Released</h3>
        </div>

        <div>
          <DisplayNew
            data={data.filter((data) => data.name === "new")}
          />
        </div>
      </div>
    </div>
  );
};

export default New;
