import React from "react";
import CardList from "../../components/Card/CardList";
import { useAtom } from "jotai";
import { favoriteAtom } from "../../store/store";
import Buttons from "./Buttons";
import VolumeDisplay from "../../components/VolumeDisplay";

const Favorite: React.FC = () => {
  const [favoriteList] = useAtom(favoriteAtom);
  return (
    <>
      <Buttons />
      <VolumeDisplay />
      <CardList
        tracks={favoriteList}
        count={favoriteList.length}
        page="favorite"
      />
    </>
  );
};

export default Favorite;
