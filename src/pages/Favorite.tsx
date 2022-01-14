import React from "react";
import AppHeader from "../components/AppHeader";
import CardList from "../components/CardList";
import { useAtom } from "jotai";
import { favoriteAtom } from "../stores";
import SaveButton from "../components/SaveButton";

const Favorite: React.FC = () => {
  const [favoriteList] = useAtom(favoriteAtom);
  return (
    <>
      <AppHeader />
      <SaveButton />
      <CardList
        tracks={favoriteList}
        count={favoriteList.length}
        page="favorite"
      />
    </>
  );
};

export default Favorite;
