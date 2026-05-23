import { useState } from "react";
import React from "react";
import fast from "../assets/images/fastx.jpg"
import juju from "../assets/images/jujutsu kaisen.jpg"
import squid from "../assets/images/squid game the challenge.jpg"
import marvels from "../assets/images/the marvels.jpg"
import beast from "../assets/images/the beast.jpg"
import fiveNight from "../assets/images/five nights at freddys.jpg"
import lucifer from "../assets/images/lucifer.jpg"

const Movies=() =>{
    const movies = useState([
        {
          id:1,
          image:{fast},
          title: "Ghosted",
          date: "november 13,2023",
          genre: "drama"
        },
        {
          id: 2,
          image:{juju},
          title: "Missing",
          date: "november,14,2023",
          genre: "drama"
        },
        {
          id: 3,
          image:{lucifer},
          title: "The system",
          date: "november,15,2023",
          genre: "drama"
        },
      ]);
    return(
        <div>
            
        </div>
    )
}

export default Movies