import { Song } from "dataInterfaces";

interface SongsArray {
  songsData: Song[];
  currentPage: number;
}

const SongsContainer: React.FC<SongsArray> = ({ songsData, currentPage }) => {
  const resultsNumber: number = songsData.length;

  const songsPerPage: number = 12;
  const lastSongIndex: number = currentPage * songsPerPage;
  const firstSongIndex: number = lastSongIndex - songsPerPage;
  const songsPage: Song[] = songsData.slice(firstSongIndex, lastSongIndex);

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
