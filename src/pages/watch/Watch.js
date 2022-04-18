import React from 'react'
import "./watch.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackIcon className='videoBackBut' />
                Home
            </div>

            <video className='video' autoPlay progress controls src="assets/video1.mp4" />

        </div>
    )
}

export default Watch