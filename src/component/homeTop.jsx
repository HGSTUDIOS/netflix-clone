import "bootstrap/dist/css/bootstrap.min.css";
import netflixIcon from "../assets/svg/logos_netflix-icon.svg";
import plusIcon from "../assets/svg/plusOutlinedSmall.svg";
import infoIcon from "../assets/svg/info.svg";
import playIcon from "../assets/svg/play.svg";
import "./homeTop.css";
import { useNavigate } from "react-router-dom";

const HomeTop = () => {
  const navigate=useNavigate()

  const handleTvShows= () =>{
    navigate("/Tv")
  }
  const handleMovies= () =>{
    navigate("/Movies")
  }
  const handleMyList= () =>{
    navigate("/MyList")
  }
  return (
    <div className="top">
      <div
        style={{
          display: "flex",
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
          <button style={{background:"none",color:"#fff",border:"none"}} onClick={handleTvShows} ><p>TV Shows</p></button>
        </div>
        <div style={{}}>
        <button style={{background:"none",color:"#fff",border:"none"}} onClick={handleMovies}><p>Movies</p></button>
        </div>
        <div style={{}}>
        <button style={{background:"none",color:"#fff",border:"none"}} onClick={handleMyList}><p>My List</p></button>
        </div>
      </div>

      <div className="bg-black" style={{ marginTop: "43vh" }}>
        <div>
          <p
            style={{
              color: "#fff",
              textAlign: "center",
              margin: "0",
              paddingBottom: "10px",
            }}
          >
            #1 in Nigeria Today
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            color: "#fff",
            marginLeft: "40px",
          }}
        >
          <button onClick={handleMyList} style={{background:"none",color:"#fff",border:"none"}}>
          <div style={{ color: "#fff" }}>
            <img style={{ marginLeft: "2px" }} src={plusIcon} alt="" />
            <p>My List</p>
          </div>
          </button>
          <div style={{}}>
            <button
              className="btn btn-light"
              style={{
                fontWeight: "bolder",
                fontSize: "25px",
                height: "52px",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ marginTop: "-10px", marginLeft: "-15px" }}
                src={playIcon}
                alt=""
              />
              Play
            </button>
          </div>
          <div style={{}}>
            <img style={{ marginLeft: "3px" }} src={infoIcon} alt="" />
            <p>Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
