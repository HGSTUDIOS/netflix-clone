import data from "../../movies.json";
import netflixIcon from "../assets/svg/logos_netflix-icon.svg";
import MyListBar from "../component/myListBar";

const Lists = ({ image, title }) => (
  <div>
    <img style={{width:"120px",height:"180px",objectFit:"cover",borderRadius:"4px"}} src={image} alt={title} />
  </div>
);

const DisplayList = ({ movies }) => (
  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",alignItems:"center",margin:"20px 10px 80px"}}>
    {movies.map((movie) => <Lists key={movie.id} title={movie.title} image={movie.image} />)}
  </div>
);

const MyList = () => (
  <div style={{overflowX:"hidden",minHeight:"100vh",background:"#000"}}>
    <div style={{display:"flex",alignItems:"center",gap:"20px",fontSize:"20px",color:"#fff",padding:"12px 16px"}}>
      <img src={netflixIcon} alt="Netflix" />
      <p style={{margin:0}}>My List</p>
    </div>
    <MyListBar />
    <DisplayList movies={data.filter((movie) => movie.name === "list" && movie.image)} />
  </div>
);

export default MyList;
