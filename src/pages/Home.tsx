import React from "react";
import AppHeader from "../components/AppHeader";
import Main from "./section-main/Main";
import Favorite from "./section-favorite/Favorite";
import { useAtom } from "jotai";
import { defaultParam, isFavoriteAtom, paramAtom } from "../store/store";
import { requestType } from "../lib/types";
import WelcomePage from "./WelcomePage";

const Home: React.FC = () => {
  const [isFavorite] = useAtom<boolean>(isFavoriteAtom);
  const [param] = useAtom<requestType>(paramAtom);

  return (
    <>
      <AppHeader />
      {param.keyword === defaultParam.keyword && !isFavorite && <WelcomePage />}
      {isFavorite ? <Favorite /> : <Main />}
    </>
  );
};

export default Home;
