import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";



export default function List({ list }) {
    //taking list props from the home page



    //Left Right (Horizontal scroll view) Scrolling Effect=============================================
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
    //============================================================================






    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />

                <div className="container" ref={listRef}>


                    {/* for every list item i.e, for every item of horizontal scrolling  */}
                    {/* here list contains title description,duration, ageLimit etc so list is noy array it is content */}
                    {list.content.map((item, i) => (
                        <ListItem index={i} item={item} />  
                        //here items means all our items inside the list title ,desc etc we will pass it to listItem component 
                    ))}




                </div>


                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />


            </div>
        </div>
    );
}