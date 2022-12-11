import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'
import VerifiedIcon from '@mui/icons-material/Verified';


function ChannelRow({image,ChannelName,verified,subs,videos,description}) {
  return (
    <div className='channelRow'>
        <a href="https://www.youtube.com/channel/UCKhhorSkRd0LEflI8xO6PoA">
            <Avatar 
                className='channelRow_logo'
                alt={ChannelName} 
                src={image}
            />
        </a>
        <div className='channelRow_text'>
            <h4>
                {ChannelName}  {verified && <VerifiedIcon/>}
            </h4>
            <p>
                {subs} Subscriber | {videos} videos
            </p>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default ChannelRow