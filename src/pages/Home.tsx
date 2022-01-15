import React from "react";
import AppHeader from "../components/AppHeader";
import Main from "./section-main/Main";
import Favorite from "./section-favorite/Favorite";
import { useAtom } from "jotai";
import { isFavoriteAtom } from "../store/store";

const Home: React.FC = () => {
  const [isFavorite] = useAtom<boolean>(isFavoriteAtom);
  return (
    <>
      <AppHeader />
      {isFavorite ? <Favorite /> : <Main />}
    </>
  );
};

export default Home;
