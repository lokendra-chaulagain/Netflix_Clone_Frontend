import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React from 'react'
import "./listItem.scss"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ListItem({ index, item }) {
    //Hover effect
    const [isHovered, setIsHovered] = useState(false)


    //For getting any random lists with query
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("movies/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
                    }
                })
                // console.log(res);
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
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

            <Link to={{ pathname: "/watch", movie: movie }} >
                <img src={movie.img} alt="" />
            </Link>




            <div className="itemInfo">
                <div className="icons">

                    <Link to={{ pathname: '/watch', movie: movie }}>
                        <PlayArrow className='icon' />
                    </Link>
                    <Add className='icon' />
                    <ThumbUpAltOutlined className='icon' />
                    <ThumbDownAltOutlined className='icon' />
                </div>

                <div className="itemInfoTop">
                    <span>{movie.duration || '2 hour 35 min'}</span>
                    <span className='ageLimit'>+{movie.ageLimit}</span>
                    <span>{movie.year}</span>
                </div>

                <div className="description">{movie.desc} </div>
                <div className="genere">{movie.genere || 'genera:Action'}</div>

            </div>
        </div>
    )
}

export default ListItem






























// import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
// import React from 'react'
// import "./listItem.scss"
// import { useState } from 'react'


// function ListItem({  index }) {
//     //hover effect
//     const [isHovered, setIsHovered] = useState(false);



//     //
//     // const [movie, setMovie] = useState({})
//     // useEffect(() => {
//     //     const getMovie = async () => {
//     //         try {
//     //             const res = await axios.get("movies/find/" + item, {
//     //                 headers: {
//     //                     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmOTMxM2RmMGYzZDYzNTg3NDA2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY3MTAwMCwiZXhwIjoxNjUxNTM1MDAwfQ.HOeFPw__H4xc80CJOX2bUcLuzex9W-tD1-ZiqZA5By8 "
//     //                 }
//     //             })
//     //             // console.log(res.data);
//     //             setMovie(res.data)

//     //         } catch (error) {
//     //             console.log(error)
//     //         }
//     //     }
//     //     getMovie()
//     // }, [item])//whenever we change the item fire this useEffect



//     return (
//         <div className='listItem'
//             style={{ left: isHovered && index * 225 - 50 }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}>

//             <img src="" alt="" />



//             {isHovered && (
//                 <>
//                     <video src="" autoPlay={true} loop />
//                     <div className="itemInfo">
//                         <div className="icons">
//                             <PlayArrow className='icon' />
//                             <Add className='icon' />
//                             <ThumbUpAltOutlined className='icon' />
//                             <ThumbDownAltOutlined className='icon' />
//                         </div>

//                         <div className="itemInfoTop">
//                             <span>12 hour</span>
//                             <span className='ageLimit'>+16 </span>
//                             <span> </span>
//                         </div>

//                         <div className="description">desc</div>

//                         <div className="genere">genere </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     )
// }

// export default ListItem