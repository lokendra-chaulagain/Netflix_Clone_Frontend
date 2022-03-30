import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"

function List() {

    //react hooks
    const listRef= useRef()


    // function for onClick event
    const handleClick = (direction) => {

        let distance = listRef.current.getBoundingClientReact().x - 50
        if (direction === 'left') {
            listRef.current.style.transform = `translateX( ${230 + distance}px)`

        }
        console.log(distance)

    }


    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} />
                {/* onClick ma yo function call gerne */}
                <div className="container" ref={listRef} >
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
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
                {/* onClick ma yo function call gerne */}
            </div>
        </div>
    )
}

export default List