import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./thriller.scss";

export default function Thriller() {
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
      <div className="thrillerlist">
        <span className="thrillerlistTitle">Thriller</span>
        <div className="thrillerwrapper">
          <ArrowBackIosOutlined
            className="thrillersliderArrow thrillerleft"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          <div className="thrillercontainer" ref={listRef}>
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
            className="thrillersliderArrow thrillerright"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}
