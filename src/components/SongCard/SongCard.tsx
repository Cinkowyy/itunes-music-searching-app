import { Song } from "dataInterfaces";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { useEffect, useState } from "react";



const playerStyles = {
  background: "transparent",
  boxShadow: "none",
  padding: "10px 0"
}

const SongCard: React.FC<Song> = (props) => {
  const [songUrl, setSongUrl] = useState<string>("");

  useEffect(() => {
    setSongUrl(props.previewUrl);
  }, [props.previewUrl]);
  return (
    <div className="songCard">
      <div className="songCard__image">
        <img src={props.artworkUrl100} alt="artwork" />
      </div>
      <div className="songCard__content">
        <div className="songDetails">
          <p className="songDetails__track">{props.trackName}</p>
          <p className="songDetails__artist">{props.artistName}</p>
        </div>

        <div className="songCard__player">
          <AudioPlayer
            src={songUrl}
            mediaGroup="m4a"
            preload="auto"
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            showJumpControls={false}
            showFilledVolume={false}
            customAdditionalControls={[]}
            customVolumeControls={[]}
            customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
            layout="horizontal-reverse"
            style={playerStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default SongCard;
