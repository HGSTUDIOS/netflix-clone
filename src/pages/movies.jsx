import MoviesTop from "../component/moviesTop";
import MoviesBar from "../component/moviesBar";
import HomeBody from "../component/homeBody";

const Movies = () => {
  return (
    <div style={{overflowX:"hidden"}}>
      <MoviesTop/>
      <MoviesBar />
      <HomeBody />
    </div>
  );
};

export default Movies;
