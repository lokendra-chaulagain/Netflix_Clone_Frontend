import React, { useEffect } from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Watch() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  //Data according to id
  const [detail, setDetail] = React.useState({});
  useEffect(() => {
    const fetchDetail = async () => {
      const res = await axios.get(`/movies/get/${path}`);
      setDetail(res.data);
    };
    fetchDetail();
  }, [path]);
  console.log(detail);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon className="videoBackBut" />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={detail?.video}
      />
    </div>
  );
}

export default Watch;
