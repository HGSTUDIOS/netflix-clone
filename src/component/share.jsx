import { Link } from "react-router-dom";
import dots from "../assets/svg/threeDots.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import facebook from "../assets/svg/facebook.svg";
import gmail from "../assets/svg/GmailLogo.svg";
import message from "../assets/svg/messageDots.svg";
const Share = () => {
  return (
    <div style={{ background: "#111", paddingTop: "15px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ marginBottom: "7px", marginLeft: "15px" }}
            src={message}
            alt=""
          />
          <h5 style={{ color: "#fff", marginLeft: "10px" }}>
            Tell friends about Netflix.
          </h5>
        </div>
        <p
          style={{
            color: "#fff",
            marginLeft: "15px",
            marginRight: "15px",
            fontSize: "11px",
            fontWeight: "lighter",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
          beatae veniam hic facere maxime similique voluptas fugiat consequatur
          voluptatibus.
        </p>
        <p
          style={{
            color: "#fff",
            marginLeft: "15px",
            fontSize: "11px",
            fontWeight: "lighter",
            textDecoration: "underline",
          }}
        >
          Terms & Conditions
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          style={{
            background: "#000",
            height: "5vh",
            width: "260px",
            marginRight: "20px",
            border: "none",
            outline: "none",
          }}
          className="input m-2"
          type="text"
        />
        <button
          style={{ borderRadius: "1px" }}
          className="btn btn-light fw-bolder"
        >
          Copy Link
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          marginLeft: "10px",
        }}
      >
        <div style={{ borderRight: "1px solid white" }}>
          <img
            style={{ paddingLeft: "25px", paddingRight: "25px" }}
            src={whatsapp}
            alt=""
          />
        </div>
        <div style={{ borderRight: "1px solid white" }}>
          <img style={{ paddingRight: "25px" }} src={facebook} alt="" />
        </div>
        <div style={{ borderRight: "1px solid white" }}>
          <img style={{ paddingRight: "25px" }} src={gmail} alt="" />
        </div>
        <div>
          <img style={{ paddingRight: "25px" }} src={dots} alt="" />
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default Share;
