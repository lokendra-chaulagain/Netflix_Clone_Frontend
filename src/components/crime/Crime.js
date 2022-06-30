import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./crime.scss";

export default function Crime() {
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

  return (
    <>
      <div className="cslist">
        <span className="cslistTitle">Crime</span>
        <div className="cswrapper">
          <ArrowBackIosOutlined
            className="cssliderArrow csleft"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          <div className="cscontainer" ref={listRef}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>

          <ArrowForwardIosOutlined
            className="cssliderArrow csright"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}
