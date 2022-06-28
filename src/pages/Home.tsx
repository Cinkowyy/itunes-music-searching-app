import SearchBar from "components/SearchBar/SearchBar";
import Pagination from "components/Pagination/Pagination";
import SongsContainer from "components/SongsContainer/SongsContainer";
import Footer from "components/Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import { dataProps, songProps, artistProps } from "dataInterfaces";

const FETCH_URL: string =
  "https://itunes.apple.com/lookup?id=183313439,966309175,358714030,980795202,1750802,935727853&entity=song&limit=12&sort=popularity";

/* 
Ed Sheeran - 183313439
Post Malone - 966309175
Imagine Dragons - 358714030
Marshmello - 980795202
Skillet - 1750802
Camila Cabello - 935727853
*/

const Home = () => {
  const [songs, setSongs] = useState<songProps[]>([]);
  const [fetchUrl, setFetchUrl] = useState<string>(FETCH_URL);

  const handleFetchUrl = useCallback(
    (url: string) => {
      setFetchUrl(url);
    },
    [fetchUrl]
  );

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedResults: Response = await fetch(fetchUrl);
      const jsonResults: dataProps = await fetchedResults.json();
      const filteredResults: songProps[] = jsonResults.results.filter(
        (value: songProps | artistProps): value is songProps => {
          return value.wrapperType === "track";
        }
      );

      setSongs(filteredResults);
    };

    fetchSongs();
  }, [fetchUrl]);

  return (
    <div className="home">
      <SearchBar setFetchUrl={handleFetchUrl} />
      <Pagination />
      <SongsContainer songsData={songs} />
      <Footer />
    </div>
  );
};

export default Home;
