import { useEffect, useState } from "react";
import { BackgroundSection } from "./components/backgorund";
import { Header } from "./components/header";
import { CharacterList } from "./components/character-list";
import { SocialLinks } from "./components/social";

import { api } from "./api";

function app() {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      setData(await api(url));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchNextPage = async (url) => {
    fetchData(url);
  };

  const fetchPreviousPage = async (url) => {
    fetchData(url);
  };

  return (
    <>
      <Header />
      <BackgroundSection />
      <CharacterList
        data={data}
        fetchNextPage={(url) => fetchNextPage(url)}
        fetchPreviousPage={(url) => fetchPreviousPage(url)}
      />
      <SocialLinks />
    </>
  );
}

export default app;
