import { songProps } from "dataInterfaces";

interface songsArray {
  songsData: songProps[];
}

const SongsContainer: React.FC<songsArray> = ({ songsData }) => {
  return (
    <div className="songsContainer">
      <p className="resultsNumber">
        {songsData.length > 0
          ? `Number of results: ${songsData.length}`
          : "No results"}
      </p>
      {songsData.map((song) => {
        return (
          <p>
            {song.artistName} - {song.trackName}
          </p>
        );
      })}
    </div>
  );
};

export default SongsContainer;
