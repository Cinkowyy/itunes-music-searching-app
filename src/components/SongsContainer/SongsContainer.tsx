import { songProps } from "dataInterfaces";

interface songsArray {
  songsData: songProps[];
  currentPage: number;
}

const SongsContainer: React.FC<songsArray> = ({ songsData, currentPage }) => {
  const resultsNumber = songsData.length;

  const songsPerPage: number = 12;
  const lastSongIndex: number = currentPage * songsPerPage;
  const firstSongIndex: number = lastSongIndex - songsPerPage;
  const songsPage: songProps[] = songsData.slice(firstSongIndex, lastSongIndex);

  return (
    <div className="songsContainer">
      <p className="resultsNumber">
        {resultsNumber > 0
          ? `Number of results: ${resultsNumber}`
          : "No results"}
      </p>
      {songsPage.map((song) => {
        return (
          <p key={song.trackId}>
            {song.artistName} - {song.trackName}
          </p>
        );
      })}
    </div>
  );
};

export default SongsContainer;
