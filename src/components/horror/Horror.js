import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./horror.scss";

export default function Horror() {
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
      <div className="hslist">
        <span className="hslistTitle">Horror</span>
        <div className="hswrapper">
          <ArrowBackIosOutlined
            className="hssliderArrow hsleft"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          <div className="hscontainer" ref={listRef}>
            <ListItem />
          </div>

          <ArrowForwardIosOutlined
            className="hssliderArrow hsright"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}
