import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Search from "./pages/search";
import ComingSoon from "./pages/comingSoon";
import Downloads from "./pages/downloads";
import More from "./pages/more";
import LandingPage from "./pages/landing page";
import LoginSignup from "./pages/signInsignUp";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";
import TvShow from "./pages/tvShows";
import Movies from "./pages/movies";
import MyList from "./pages/myList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="" element={<LandingPage />} />
          <Route path="search" element={<Search />} />
          <Route path="comingSoon" element={<ComingSoon />} />
          <Route path="download" element={<Downloads />} />
          <Route path="more" element={<More />} />
          <Route path="sign" element={<LoginSignup/>} />
          <Route path="signUp" element={<SignUp/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="tv" element={<TvShow/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="myList" element={<MyList/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
