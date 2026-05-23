import data from "../../../movies.json";

const Lists = ({ title, image, date, genre }) => {
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

const DisplayList = ({ data }) => {
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
        <Lists
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

const List = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h3>My List</h3>
        </div>

        <div>
          <DisplayList
            data={data.filter((data) => data.name === "list")}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
