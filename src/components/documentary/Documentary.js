import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import { useAPI } from "../../context/getContext";
import ListItem from "../listItem/ListItem";
import "./documentary.scss";

export default function Drama() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const { allDocumentary } = useAPI();
  console.log(allDocumentary);

  return (
    <>
      <div className="dramalist">
        <span className="dramalistTitle">Documentary</span>
        <div className="dramawrapper">
          <ArrowBackIosOutlined
            className="dramasliderArrow dramaleft"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          <div className="dramacontainer" ref={listRef}>
            {allDocumentary.map((documentary, i) => (
              <ListItem key={i} index={i} documentary={documentary} />
            ))}
          </div>

          <ArrowForwardIosOutlined
            className="dramasliderArrow dramaright"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}
