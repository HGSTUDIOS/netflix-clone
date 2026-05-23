import TvShowTop from "../component/tvShowTop";
import MoviesBar from "../component/moviesBar";
import HomeBody from "../component/homeBody";

const TvShow = () => {
  return (
    <div style={{overflowX:"hidden"}}>
      <TvShowTop/>
      <MoviesBar />
      <HomeBody />
    </div>
  );
};

export default TvShow;
