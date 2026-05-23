// import MyListTop from "../component/myListTop";
// import HomeBar from "../component/homeBar";
// import List from "../component/homeBody/list";
import data from "../../movies.json";
import netflixIcon from "../assets/svg/logos_netflix-icon.svg";
import MyListBar from "../component/myListBar";


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
        display:"grid",
        gridTemplateColumns:"repeat(3,33.3%)",
        gap:"10px", 
        alignItems: "center",
        marginLeft: "10px",
        marginRight: "20px",
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

const handleMyList= () =>{
  navigate("/MyList")
}

const MyList = () => {
 
  return (
    <div style={{overflowX:"hidden"}}>
 <div
        style={{
          display: "flex flex-col md:flex-row",
          alignItems: "center",
          gap: "20px",
          fontSize: "20px",
          color: "#fff",
        }}
      >
        <div style={{}}>
          <img src={netflixIcon} alt="" />
        </div>
        <div style={{}}>
        <button style={{background:"none",color:"#fff",border:"none"}} onClick={handleMyList}><p>My List</p></button>
        </div>
      </div>
      <MyListBar/>
        <div>
          <DisplayList
            data={data.filter((data) => data.name === "list")}
          />
        </div>
    </div>
  );
};

export default MyList;
