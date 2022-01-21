import React, { useEffect } from "react";
import CardList from "../../components/Card/CardList";
import { useAtom } from "jotai";
import { favoriteAtom } from "../../store/store";
import SaveLoad from "./SaveLoad";
import VolumeDisplay from "../../components/VolumeDisplay";
import { onLoad } from "../../lib/util";
import { useUpdateAtom } from "jotai/utils";
import Header from "../Header";

const Favorite: React.FC = () => {
  const [favoriteList] = useAtom(favoriteAtom);
  const setFavorite = useUpdateAtom(favoriteAtom);

  useEffect(() => {
    onLoad("iTunes", setFavorite);
  }, []);

  return (
    <>
      <Header />
      <CardList
        tracks={favoriteList}
        count={favoriteList.length}
        page="favorite"
      />
    </>
  );
};

export default Favorite;
