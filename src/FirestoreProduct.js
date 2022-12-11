import React from 'react'
import VideoCard from './VideoCard'
import './VideoCard.css'


function Firestoreproduct({videos}) {
   

    return (
        <div className='videoCard'>

            {[videos.data]?.map(item =>( 

                <VideoCard
                    image={[videos.data.thumbnail]}
                    title={[videos.data.title]}
                    channel={[videos.data.channel]}
                    views={[videos.data.views]}
                    timestamp={[videos.data.timestamp]}
                    channelImage={[videos.data.thumbnail]}
                />
            ))}     

        </div>
    )
}

export default Firestoreproduct
