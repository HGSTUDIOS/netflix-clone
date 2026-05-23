import Home from "../pages/home";
import Search from "../pages/search";
import ComingSoon from "../pages/comingSoon";
import Downloads from "../pages/downloads";
import More from "../pages/more";
import { useNavigate } from "react-router-dom";
import home_icon from "../assets/svg/homeSimple.svg";
import search_icon from "../assets/svg/Search.svg";
import comingSoon_icon from "../assets/svg/comingSoonActive.svg";
import download_icon from "../assets/svg/download.svg";
import more_icon from "../assets/svg/more.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const ComingBar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  const handleSearch = () => {
    navigate("/search");
  };
  const handleComingSoon = () => {
    navigate("");
  };
  const handleDownload = () => {
    navigate("/download");
  };
  const handleMore = () => {
    navigate("/more");
  };

  return (
  <div style={{position: "fixed"}}>
      <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingRight: "20px",
        marginTop: "757px",
        background: "#111",
        gap: "29px",
        height: "8vh",
        paddingTop: "10px",
      }}
    >
      <button
        style={{
          background: "#111",
          color: "white",
          border: "none",
          marginLeft: "10px",
        }}
        onClick={handleHome}
      >
        <img
          style={{ display: "block", marginLeft: "3px" }}
          src={home_icon}
          alt=""
        />
        <p style={{ fontSize: "10px",color:"gray" }}>Home</p>
      </button>

      <button
        style={{ background: "#111", color: "white", border: "none" }}
        onClick={handleSearch}
      >
        <img
          style={{ display: "block", marginLeft: "3px" }}
          src={search_icon}
          alt=""
        />
        <p style={{ fontSize: "10px",color:"gray"  }}>Search</p>
      </button>

      <button
        style={{ background: "#111", color: "white", border: "none" }}
        onClick={handleComingSoon}
      >
        <img
          style={{ display: "block", marginLeft: "22px" }}
          src={comingSoon_icon}
          alt=""
        />
        <p style={{ fontSize: "9px" }}>Coming Soon</p>
      </button>

      <button
        style={{ background: "#111", color: "white", border: "none" }}
        onClick={handleDownload}
      >
        <img
          style={{ display: "block", marginLeft: "13px" }}
          src={download_icon}
          alt=""
        />
        <p style={{ fontSize: "10px" ,color:"gray" }}>Downloads</p>
      </button>

      <button
        style={{ background: "#111", color: "white", border: "none" }}
        onClick={handleMore}
      >
        <img style={{ display: "block" }} src={more_icon} alt="" />
        <p style={{ fontSize: "10px", marginTop: "4px",color:"gray"}}>More</p>
      </button>
    </div>
  </div>
  );
};
export default ComingBar;
