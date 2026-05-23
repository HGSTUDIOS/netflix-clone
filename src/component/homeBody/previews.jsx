import data from "../../../movies.json";

const Previews = ({ title, image, date, genre }) => {
  return (
    <div>
      <div>
        <div>
          <img
            style={{borderRadius:"50%",width: "150px",height:"150px"}}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const DisplayPreview = ({ data }) => {
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
        <Previews
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


const Preview = () => {
  return (
    <div>
      <div>
      <div style={{ marginTop: "120px", marginLeft: "20px" }}>
          <h1>Previews</h1>
        </div>

        <div>
          <DisplayPreview
            data={data.filter((data) => data.name === "preview")}
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;
