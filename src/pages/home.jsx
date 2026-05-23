import HomeTop from "../component/homeTop";
import HomeBar from "../component/homeBar";
import HomeBody from "../component/homeBody";

const Home = () => {
  return (
    <div style={{overflowX:"hidden"}}>
      <HomeTop />
      <HomeBar />
      <HomeBody />
    </div>
  );
};

export default Home;
