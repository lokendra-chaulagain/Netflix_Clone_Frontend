import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React from 'react'
import "./listItem.scss"
import { useState } from 'react'

function ListItem({index}) {
    //
    const [isHovered, setIsHovered] = useState(false)


    return (

        <div className='listItem' 
    style={{left:isHovered && index *225 -50} }
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="https://images6.alphacoders.com/114/thumbbig-1141749.webp" alt="" />


            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpAltOutlined />
                    <ThumbDownAltOutlined />
                </div>

                <div className="itemInfoTop">
                    <span>1 hour 45 mins</span>
                    <span className='ageLimit'>+18</span>
                    <span>2002</span>

                </div>

                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates asperiores placeat totam nulla. Eaque.
                </div>

                <div className="genere">Action</div>

            </div>
        </div>




    )
}

export default ListItem