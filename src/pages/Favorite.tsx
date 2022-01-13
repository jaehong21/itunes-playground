import React from "react";
import Header from "../components/Header";
import CardList from "./section-favorite/CardList";
import { useAtom } from "jotai";
import { favoriteAtom } from "../stores";
import { Box } from "@mui/material";
import SaveButton from "../components/SaveButton";

const Favorite: React.FC = () => {
  const [favoriteList] = useAtom(favoriteAtom);
  return (
    <>
      <Header />
      <SaveButton />
      <Box>
        <CardList tracks={favoriteList} count={favoriteList.length} />
      </Box>
    </>
  );
};

export default Favorite;
