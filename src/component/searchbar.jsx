import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../assets/svg/search_outlined.svg";
import mic from "../assets/svg/microphone.svg";
import "./searchbar.css";
import data from "../../movies.json"


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="body">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ position: "absolute", marginLeft: "25px" }}
              src={search}
              alt=""
            />
            <input
              style={{
                background: "#2e2e2e",
                width: "100%",
                padding: "15px",
                color: "white",
                border: "none",
                outline: "none",
                paddingLeft: "50px",
              }}
              type="text"
              placeholder="Search for a show,movie,genre,e.t.c"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <img
              style={{ position: "absolute", marginLeft: "340px" }}
              src={mic}
              alt=""
            />
          </div>
          <div style={{display:"flex",flexDirection:"column",height:"25vh",overflowY:"scroll"}}>
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return "";
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div  key={val.id} style={{ borderBottom: "1px solid black"}} className="div">
                    <div
                      style={{ display: "flex", alignItems: "center",height:"50px" }}
                      key={val.id}
                    >
                      <img style={{width:"40px",height:"40px"}} src={val.image} />
                      <div  key={val.id} style={{ fontSize: "20px", marginTop: "12px" }}>
                        <p style={{marginLeft:"10px",fontSize:"15px"}}>{val.title}</p>
                        {/* <p>Date of Release:{val.date}</p>
                      <p>genre:{val.genre}</p> */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
