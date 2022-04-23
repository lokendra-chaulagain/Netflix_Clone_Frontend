import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React from 'react'
import "./listItem.scss"
import { useState, useEffect } from 'react'
import axios from 'axios';

function ListItem({ index, item }) {
    //hover effect
    const [isHovered, setIsHovered] = useState(false);
    


    //
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("movies/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
                    }
                })
                // console.log(res.data);
                setMovie(res.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    }, [item])//whenever we change the item fire this useEffect



    return (
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 50 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <img src={movie.img} alt="" />



            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined className='icon' />
                            <ThumbDownAltOutlined className='icon' />
                        </div>

                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className='ageLimit'>+{movie.ageLimit} </span>
                            <span>{movie.year} </span>
                        </div>

                        <div className="description">{movie.desc}</div>

                        <div className="genere">{movie.genere} </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem