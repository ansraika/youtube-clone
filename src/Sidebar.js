import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
      <Link to='/' className='sidebar_decoration'>
        <SidebarRow selected Icon={ HomeIcon } title="Home"/>
      </Link>  
        <SidebarRow Icon={ ExploreIcon } title="Explore"/>
        <SidebarRow Icon={LibraryAddIcon} title="Library"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
        <hr />
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"/>
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow Icon={PhotoCameraIcon} title="Your Videos"/>
        <SidebarRow Icon={ArrowDropDownIcon} title="Show More"/>

    </div>
  )
}

export default Sidebar