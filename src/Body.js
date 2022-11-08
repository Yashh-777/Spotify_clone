import { Download, Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from "./Header.js"
import SongRow from "./SongRow.js"

function Body({spotify}) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify}/>

        <div className= "body__info">
          <img src={discover_weekly?.images[0].url} alt= ""/>

          <div className='body__infoText'>
            <string>PLAYLIST</string>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>

        <div className='body__songs'>
          <div className='body__icons'>
            <PlayCircleFilled className='body__shuffle'/>
            <Favorite fontSize='large'/>
            <MoreHoriz/>
          </div>

          {/*List of songs*/}
          {discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track}/>
          ))}
        </div>
    </div>
  )
}

export default Body

