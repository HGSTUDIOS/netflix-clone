import rec1 from "../assets/svg/Rectangle 2.svg";
import rec2 from "../assets/svg/Rectangle 3.svg";
import rec3 from "../assets/svg/Rectangle 4.svg";
import rec4 from "../assets/svg/Rectangle 5.svg";
import plus from "../assets/svg/plusOutlinedLarge.svg";
// import pen from "../assets/svg/"

const Profile = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginLeft: "10px",
          marginTop: "30px",
        }}
      >
        <div>
          <img src={rec1} alt="" />
          <p
            style={{
              fontWeight: "lighter",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Semilore
          </p>
        </div>
        <div>
          <img src={rec2} alt="" />
          <p
            style={{
              fontWeight: "lighter",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Steve
          </p>
        </div>
        <div>
          <img src={rec3} alt="" />
          <p
            style={{
              fontWeight: "lighter",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Thelma
          </p>
        </div>
        <div>
          <img src={rec4} alt="" />
          <p
            style={{
              fontWeight: "lighter",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Kids
          </p>
        </div>
        <div
          style={{
            border: "solid 1px white",
            textAlign: "center",
            marginTop: "-36px",
            lineHeight: "6vh",
            width: "65px",
            height: "60px",
          }}
        >
          <img src={plus} alt="" />
        </div>
      </div>

      <div>
        {/* <img src={pen} alt="" /> */}
        <p style={{ fontWeight: "lighter", textAlign: "center" }}>
          Manage Profiles
        </p>
      </div>
    </div>
  );
};

export default Profile;
