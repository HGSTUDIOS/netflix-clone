import Preview from "./homeBody/previews";
import Trending from "./homeBody/trending";
import Popular from "./homeBody/popular";
import Nigeria from "./homeBody/nigeria";
import African from "./homeBody/african";
import Nollywood from "./homeBody/nollywood";
import List from "./homeBody/list";
import Us from "./homeBody/us";
import Netflix from "./homeBody/netflixOriginal";
import New from "./homeBody/newReleased";

const HomeBody = () => {
  return (
    <div style={{marginBottom:"70px"}}>
      <Preview />
       <Popular/>
      <Trending/>
      <Nigeria/>
      <List/>
      <African/>
      <Nollywood/>
      <Netflix/>
      <New/>
      <Us/>
    </div>
  );
};

export default HomeBody;
