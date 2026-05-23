import play from "../assets/svg/playWhite.svg";
import data from "../../movies.json"

const Movies =({title,image,date,genre}) =>{
  return(
    <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#2e2e2e",
            marginBottom: "3px",
          }}
        >
          <div>
            <img
              style={{ width: "150px", height: "100px" }}
              src={image}
              alt=""
            />
          </div>

          <div style={{ marginLeft: "20px" }}>
            <p>{title}</p>
          </div>

          <div style={{position:"absolute",marginLeft:"90vw"}}>
            <img src={play} alt="" />
          </div>

        </div>
        </div>
  );
 };



const DisplayMovies =({data}) =>{
  return(
    <div style={{position:"static"}}>
      {     
      data.map((movies) => <Movies
      key={movies.id} 
      title ={movies.title}
      image ={movies.image}
      date = {movies.date}
      genre ={movies.genre}
      />)
 }
    </div>
  );
 };

const TopSearch = () => {
  return (
    <div style={{ marginTop: "-70px"}}>
      <div style={{ marginLeft: "25px", marginBottom: "20px" }}>
        <h1>Top Searches</h1>
      </div>
      <div><DisplayMovies  data={data.filter((data)=> data.name === "top searches")}/></div>
    </div>
  );
};

export default TopSearch;
