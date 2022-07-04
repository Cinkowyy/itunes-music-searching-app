import SearchBar from "components/SearchBar/SearchBar";
import Pagination from "components/Pagination/Pagination";
import SongsContainer from "components/SongsContainer/SongsContainer";
import Footer from "components/Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import { FetchedData, Song, Artist } from "dataInterfaces";

const FETCH_URL: string =
  "https://itunes.apple.com/lookup?id=183313439,966309175,358714030,980795202,1750802,935727853&entity=song&limit=10&sort=popularity";

/* 
Ed Sheeran - 183313439
Post Malone - 966309175
Imagine Dragons - 358714030
Marshmello - 980795202
Skillet - 1750802
Camila Cabello - 935727853
*/

const Home = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [fetchUrl, setFetchUrl] = useState<string>(FETCH_URL);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const songsPerPage: number = 12;
  const [numberOfPages, setNumberOfPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchUrl = useCallback((url: string) => {
    setFetchUrl(url);
  }, []);

  const handleSetCurrentPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      setIsLoading(true);
      setCurrentPage(1);
      const fetchedResults: Response = await fetch(fetchUrl);
      const jsonResults: FetchedData = await fetchedResults.json();
      const filteredResults: Song[] = jsonResults.results.filter(
        (value: Song | Artist): value is Song => {
          return value.wrapperType === "track";
        }
      );

      setNumberOfPages(Math.ceil(filteredResults.length / songsPerPage));
      setIsLoading(false);
      setSongs(filteredResults);
    };

    fetchSongs();
  }, [fetchUrl, songsPerPage]);

  return (
    <div className="home">
      <SearchBar setFetchUrl={handleFetchUrl} />
      <Pagination
        currentPage={currentPage}
        setPage={handleSetCurrentPage}
        numberOfPages={numberOfPages}
        isLoading={isLoading}
      />
      <p className="resultsNumber">
        {songs.length > 0 ? `Number of results: ${songs.length}` : "No results"}
      </p>
      <SongsContainer
        isLoading={isLoading}
        songsData={songs}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
};

export default Home;
