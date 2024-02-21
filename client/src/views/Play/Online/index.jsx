// temp imports
import profileImg1 from "../../../assets/images/temp/player1.png";
import profileImg2 from "../../../assets/images/temp/player2.png";
import AlbumCover from "../../../assets/images/temp/Test Album Cover.jpg";
import AlbumCover2 from "../../../assets/images/temp/Test Album Cover 2.jpg";
// end temp imports

function Online() {
    // this is all test data
    const p1Data = {
      username: "monkeyman22",
      profileImg: profileImg1
    }
  
    const p2Data = {
      username: "nightraven217",
      profileImg: profileImg2
    }
  
    const matchData = {
      p1Score: 550,
      p2Score: 300,
      genre: "Classical",
      winScore: 1000
    }
  
    const historyData = [
      {
        id: 0,
        title: "Snow",
        artist: "Red Hot Chili Peppers",
        albumCover: AlbumCover
      },
      {
        id: 1,
        title: "God's Plan",
        artist: "Drake",
        albumCover: AlbumCover2
      }
    ]
    // end test data
  return (
    <div className="playOnline">

    </div>
  )
}

export default Online