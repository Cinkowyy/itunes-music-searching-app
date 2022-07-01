import SongCard from "components/SongCard/SongCard";
import { Song } from "dataInterfaces";

interface SongsArray {
  songsData: Song[];
  currentPage: number;
  isLoading: boolean;
}

const SongsContainer: React.FC<SongsArray> = ({
  songsData,
  currentPage,
  isLoading,
}) => {
  const songsPerPage: number = 12;
  const lastSongIndex: number = currentPage * songsPerPage;
  const firstSongIndex: number = lastSongIndex - songsPerPage;
  const songsPage: Song[] = songsData.slice(firstSongIndex, lastSongIndex);

  return (
    <div className="songsContainer">
      <div className={`loaderContainer ${!isLoading ? "loaded" : ""}`}>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {songsPage.map((song) => {
        return <SongCard key={song.trackId} {...song} />;
      })}
    </div>
  );
};

export default SongsContainer;
