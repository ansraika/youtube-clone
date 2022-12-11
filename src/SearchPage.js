import React from 'react'
import './searchpage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import image from './tdh.png';
import VideoRow from './VideoRow';
import AmazonOffice from './amazontour.png'
import monalisa from './monalisa.png'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <TuneIcon/>
            <h2>Filter</h2>
        </div>
        <hr/>
        <ChannelRow
            image = {image}
            ChannelName = "The Doubtful Human"
            verified 
            subs = "100k"
            videos = {100}
            description = "I am a Computer Science Engineer by profession. The youtube channel is more about the general questions that we ask ourselves and then forget to look for an answer. I make videos to cover such questions and try to answer them.
            My content does not represent any organisation or company and is totally independent from my current company."
        />
        <hr/>
        <VideoRow
            views = "5K"
            subs =  "100k"
            description = "Office tour for amazon office in bangalore."
            timestamp = "7 days Ago"
            channel = "The Doubtful Human"
            title = "Amazon Bangalore ✨| Hackathon 😳 | Visiting office after 2 years | The Doubtful Human"
            image = {AmazonOffice}
        />
        <VideoRow
            views = "5K"
            subs =  "100k"
            description = "We all know about how expensive this painting is but what is the reason that makes it so special?"
            timestamp = "7 days Ago"
            channel = "The Doubtful Human"
            title = "What makes Mona Lisa so famous? 😌| The most expensive painting💰 | The doubtful human"
            image = {monalisa}
        />        
    </div>
  )
}

export default SearchPage

