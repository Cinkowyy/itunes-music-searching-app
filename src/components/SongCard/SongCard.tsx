import { Song } from "dataInterfaces";

const SongCard: React.FC<Song> = (props) => {
  return (
    <div className="songCard">
      <img
        className="songCard__image"
        src={props.artworkUrl100}
        alt="artwork"
      />
      <div className="songCard__content">
        <div className="songDetails">
          <p className="songDetails__track">{props.trackName}</p>
          <p className="songDetails__artist">{props.artistName}</p>
        </div>

        <div className="songCard__player">Player here</div>
      </div>
    </div>
  );
};

export default SongCard;
