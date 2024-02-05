import React from 'react'
import "./styles.scss";
import TrackInfo from './TrackInfo';
import unknownTrackImg from "../../../../assets/images/unknown track.png";

function MusicHistory({ historyData }) {
  const history = historyData.map(track => <TrackInfo trackData={track} key={track.id} />) // reverse the order
  history.reverse();
  
  // this is the placeholder data to show that there are more tracks coming
  const unknownTrackData = {
    title: "???",
    artist: "???",
    albumCover: unknownTrackImg
  }

  for (let i = 0; i < 20 - history.length; i++) { // 20 is arbitrarily picked
    history.push(<TrackInfo trackData={unknownTrackData} key={`${i}unknown`} />)
  }
  return (
    <div className="history">
      {history}
    </div>
  )
}

export default MusicHistory