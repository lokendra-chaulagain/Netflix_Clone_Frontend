// import {
//   Add,
//   PlayArrow,
//   ThumbDownAltOutlined,
//   ThumbUpAltOutlined,
// } from "@mui/icons-material";
// import React from "react";
// import "./listItem.scss";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function ListItem({ index, item }) {
//   const [isHovered, setIsHovered] = useState(false);
//   //===============================================

//   //FETCHING EVERY DETAILS FROM MOVIE(ITEM)===========================================================
//   //item is just an id
//   //For getting any random lists with query
//   const [movie, setMovie] = useState({});
//   const [didMount, setDidMount] = useState(false);

//   useEffect(() => {
//     const getMovie = async () => {
//       try {
//         const res = await axios.get("movies/find/" + item, {
//           headers: {
//             token:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 ",
//           },
//         });
//         // console.log(res);
//         setMovie(res.data);
//         setDidMount(true);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getMovie();
//     return () => setDidMount(false);
//   }, [item]); //whenever we change the item fire this useEffect

//   if (!didMount) {
//     return null;
//   }
//   //=========================================================================================================

//   return (
//     // passing movie to watch *
//     <Link to={{ pathname: "/watch", movie: movie }}>
//       <div
//         className="listItem"
//         //   hover effect========================================================
//         style={{ left: isHovered && index * 225 - 50 }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* =========================================================== */}

//         <Link to={{ pathname: "/watch", movie: movie }}>
//           <img src="/assets/1.webp" alt="" />
//         </Link>

//         <div className="itemInfo">
//           <div className="icons">
//             <PlayArrow className="icon" />

//             <Add className="icon" />
//             <ThumbUpAltOutlined className="icon" />
//             <ThumbDownAltOutlined className="icon" />
//           </div>

//           <div className="itemInfoTop">
//             <span> {movie.duration || "2 hour 35 min"}</span>
//             <span className="ageLimit">+{movie.ageLimit}</span>
//             <span>{movie.year}</span>
//           </div>

//           <div className="description">{movie.desc} </div>
//           <div className="genere">{movie.genere || "Action"}</div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default ListItem;

//=======================
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React from "react";
import "./listItem.scss";
import { useState } from "react";


function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
       
          <img src="/assets/1.webp" alt="" />
    
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />

            <Add className="icon" />
            <ThumbUpAltOutlined className="icon" />
            <ThumbDownAltOutlined className="icon" />
          </div>

          <div className="itemInfoTop">
            <span> 2 hour 35 min</span>
            <span className="ageLimit">ageLimit</span>
            <span>year</span>
          </div>

          <div className="description">des</div>
          <div className="genere"> Action</div>
        </div>
      </div>
  
  );
}

export default ListItem;
