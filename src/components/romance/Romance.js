import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import { useAPI } from "../../context/getContext";
import ListItem from "../listItem/ListItem";
import "./romance.scss";

export default function Romance() {
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

  const { allRomance } = useAPI();

  return (
    <>
      <div className="rslist">
        <span className="rslistTitle">Romance and Love</span>
        <div className="rswrapper">
          <ArrowBackIosOutlined
            className="rssliderArrow rsleft"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          <div className="rscontainer" ref={listRef}>
            {allRomance.map((romance, i) => (
              <ListItem index={i} key={i} romance={romance} />
            ))}
          </div>

          <ArrowForwardIosOutlined
            className="rssliderArrow rsright"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}
