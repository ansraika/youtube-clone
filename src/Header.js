import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { green } from '@mui/material/colors';
import {Link} from "react-router-dom";

// extension es7

function Header() {
  
  const [InputSearch,setInputSearch] = useState('');    

  return (
    <div className='header'> 
        <div className='header_left'>
            <MenuIcon/>
            <Link to={`/`}>
            <img 
                className='header_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                alt='Youtube logo'
            />
            </Link>
        </div>

        <div className='header_middle'>
            <input 
                onChange={e => setInputSearch(e.target.value)}
                value={InputSearch}
                placeholder='Search'
                type="text"
            />
            <Link to={`/search/${InputSearch}`}>
                <SearchIcon className='header_search'/>
            </Link>
            
        </div>

        <div className='header_right'>
            <VideoCallIcon className='header_icon'/>
            <NotificationsIcon className='header_icon'/>
            <Avatar className='header_icon' sx={{ bgcolor: green[500] }}>A</Avatar>
        </div>
    </div>
  )
}

export default Header