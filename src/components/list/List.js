import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";


export default function List({ list }) {

    //Left Right Scrolling Effect
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
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>



                    {list.content.map((item, i) => (
                        <ListItem index={i}  item={item}  />
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
























//MY CODE ------------------------------------------------


// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
// import React, { useRef } from 'react'
// import ListItem from '../listItem/ListItem'
// import "./list.scss"


// function List() {

//     const listRef = useRef()


//     // function for onClick event
//     const handleClick = (direction) => {

//         let distance = listRef.current.getBoundingClientReact() //to find distance from left

//         if (direction === 'left') {
//             listRef.current.style.transform = `translateX(230px)`
//             // ( ${230 + distance}px)`

//         }
//         console.log(distance)
//     }

//     //----------------------------------------

//     return (
//         <div className='list'>
//             <span className="listTitle">Continue to watch</span>
//             <div className="wrapper">
//                 <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} />
//                 {/* onClick ma yo function call gerne */}
//                 <div className="container" ref={listRef} >
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                     <ListItem />
//                 </div>
//                 <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
//                 {/* onClick ma yo function call gerne */}
//             </div>
//         </div>
//     )
// }

// export default List