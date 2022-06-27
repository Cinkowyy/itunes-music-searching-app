import SearchBar from "components/SearchBar/SearchBar";
import Pagination from "components/Pagination/Pagination";
import SongsContainer from "components/SongsContainer/SongsContainer";
import Footer from "components/Footer/Footer";
import { useEffect, useState } from "react";

const FETCH_URL =
  "https://itunes.apple.com/lookup?id=183313439,966309175,358714030,980795202,1750802,935727853&entity=song&limit=12&sort=popularity";

/* 
Ed Sheeran - 183313439
Post Malone - 966309175
Imagine Dragons - 358714030
Marshmello - 980795202
Skillet - 1750802
Camila Cabello - 935727853
*/

const filterResults = (results: any) => {
  const resultsData = results.filter((value: any) => {
    return value.wrapperType === "track";
  });

  return resultsData;
};

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async (dataUrl: string) => {
      const fetchedResults = await fetch(dataUrl);
      const jsonResults = await fetchedResults.json();
      const filteredResults = filterResults(jsonResults.results);

      setSongs(filteredResults);
    };

    fetchSongs(FETCH_URL);
  }, []);

  return (
    <div className="home">
      <SearchBar />
      <Pagination />
      <SongsContainer />
      <Footer />
    </div>
  );
};

export default Home;
