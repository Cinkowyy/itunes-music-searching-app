import SearchBar from "components/SearchBar/SearchBar";
import Pagination from "components/Pagination/Pagination";
import SongsContainer from "components/SongsContainer/SongsContainer";
import Footer from "components/Footer/Footer";
import { useEffect, useState } from "react";

const FETCH_URL:string =
  "https://itunes.apple.com/lookup?id=183313439,966309175,358714030,980795202,1750802,935727853&entity=song&limit=12&sort=popularity";

/* 
Ed Sheeran - 183313439
Post Malone - 966309175
Imagine Dragons - 358714030
Marshmello - 980795202
Skillet - 1750802
Camila Cabello - 935727853
*/

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

interface artistProps {
  wrapperType: string;
  artistType: string;
  artistName: string;
  artistLinkUrl: string;
  artistId: number;
  amgArtistId: number;
  primaryGenreName: string;
  primaryGenreId: number;
}

interface dataProps {
  resultCount: number;
  results: (songProps | artistProps)[];
}


const Home = () => {
  const [songs, setSongs] = useState<songProps[]>([]);
  const [fetchUrl, setFetchUrl] = useState<string>(FETCH_URL);

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedResults = await fetch(fetchUrl);
      const jsonResults:dataProps = await fetchedResults.json();
      const filteredResults:songProps[] = jsonResults.results.filter((value):value is songProps => {
        return value.wrapperType === "track";
      });

      setSongs(filteredResults);
    };

    fetchSongs();
  }, [fetchUrl]);

  return (
    <div className="home">
      <SearchBar />
      <Pagination />
      <SongsContainer songsData ={songs}/>
      <Footer />
    </div>
  );
};

export default Home;
