interface songProps {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUr160: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  ollectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}

interface songsArray{
  songsData: songProps[]
}


const SongsContainer:React.FC<songsArray> = ({songsData}) => {

  console.log(songsData);

  return (
    <div className="songsContainer">
      {songsData.map((song)=> {
        return <p>{song.artistName} - {song.trackName}</p>
      })}
    </div>
  );
};

export default SongsContainer;
