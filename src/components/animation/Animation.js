import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import { useAPI } from "../../context/getContext";
import ListItem from "../listItem/ListItem";
import "./animation.scss";

export default function Animation() {
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

  const { allAnimation } = useAPI();

  return (
    <>
      <div className="animationlist">
        <span className="animationlistTitle">Animation and Cartoons</span>
        <div className="animationwrapper">
          <ArrowBackIosOutlined
            className="animationsliderArrow animationleft"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          <div className="animationcontainer" ref={listRef}>
            {allAnimation.map((animation, i) => (
              <ListItem key={i} index={i} animation={animation} />
            ))}
          </div>

          <ArrowForwardIosOutlined
            className="animationsliderArrow animationright"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}
