import React, {useEffect,useState} from 'react';
import { db } from './firebase';
import './Recommendation.css'
import VideoCard from './VideoCard'
import AmazonOffice from './amazontour.png'
import monalisa from './monalisa.png'
import SIH from './SIH.png'
import onedollar from './1$club.png'
import interstellar from './intersteller.png'
import image from './tdh.png';
import FirestoreProduct from './FirestoreProduct';

function Recommended() {
  const [videos,setVideos]  = useState([])

  useEffect(() => {
           db
           .collection('homePageVideos')
           .onSnapshot(snapshot =>(
            setVideos(snapshot.docs.map(doc => ({
                   id: doc.id,
                   data : doc.data()
               })))
           ))
  },[])
  console.log("videos:",videos)
  return (
    <div className='recommendation'>
        <h2>Recommended</h2>
        <div className='recommendation_videos'>

            <div className='recommendation_videos'>
                {videos.map(videos =>(
                    <FirestoreProduct videos ={videos}/>
                ))}  
            </div> 

            {/* <VideoCard
              image={AmazonOffice}
              title="Amazon Bangalore ✨| Hackathon 😳 | Visiting office after 2 years | The Doubtful Human"
              channel="The Doubtful Human"
              views="147K"
              timestamp="7 days Ago"
              channelImage={image}
            />

            <VideoCard
              image={monalisa}
              title="What makes Mona Lisa so famous? 😌| The most expensive painting💰 | The doubtful human"
              channel="The Doubtful Human"
              views="102K"
              timestamp="2 Weeks ago"
              channelImage={image}
            />

            <VideoCard
              image={SIH}
              title="How it feels to be the judge at Smart India Hackathon"
              channel="The Doubtful Human"
              views="220K"
              timestamp="3 Weeks ago"
              channelImage={image}
            />

            <VideoCard
              image={onedollar}
              title="Why do CEOs take only 1$ of salary"
              channel="The Doubtful Human"
              views="520K"
              timestamp="4 Weeks ago"
              channelImage={image}
            />

            <VideoCard
              image={interstellar}
              title="Hans Zimmer - Interstellar (Royal Albert Hall Organ)"
              channel="Ashton Gleckman"
              views="1M"
              timestamp="1 year ago"
              channelImage={image}
            /> */}
        </div>
    </div>
  )
}

export default Recommended