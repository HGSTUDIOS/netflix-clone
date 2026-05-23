import logos_netflix from "../assets/svg/logos_netflix.svg";
import { useNavigate} from "react-router-dom";

const LandingPage = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    setTimeout(()=>{
      navigation("/Home");
    },5000)
  };

  return (
    <div>
      <div>
        <button
          style={{
            lineHeight: "min-h-screen",
            marginLeft: "20vw",
            background: "black",
            border: "none",
          }}
          onClick={handleClick}
        >
          <img src={logos_netflix} alt="" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
