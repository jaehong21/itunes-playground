import React from "react";
import { useQuery } from "react-query";
import { getSearchTrack } from "../../lib/api";
import { useAtom } from "jotai";
import {
  defaultKeyword,
  entityAtom,
  keywordAtom,
  limitAtom,
  offsetAtom,
} from "../../stores";
import { loadComponent, LoadingComponent } from "../../lib/util";
import { Box } from "@mui/material";
import CardList from "../../components/CardList";
import LandingPage from "./LandingPage";
import SearchResult from "./SearchResult";

const Main = () => {
  const [keyword] = useAtom(keywordAtom);
  const [limit] = useAtom(limitAtom);
  const [entity] = useAtom(entityAtom);
  const [offset] = useAtom(offsetAtom);

  const { isLoading, data } = useQuery<any | Error>(
    [keyword, entity, limit, offset],
    () => getSearchTrack(keyword, entity, limit, offset)
  );

  return (
    <Box sx={{ mt: 9.5 }}>
      <LandingPage />
      {!(keyword === defaultKeyword) && (
        <>
          <SearchResult text={keyword} />
          {loadComponent(isLoading, <LoadingComponent />, <></>)}
          {data && (
            <CardList
              tracks={data.data.results}
              count={data.data.resultCount}
              page="home"
            />
          )}
        </>
      )}
    </Box>
  );
};

export default Main;
