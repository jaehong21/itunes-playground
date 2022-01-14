import React from "react";
import { useQuery } from "react-query";
import { getSearchTrack } from "../../lib/api";
import { useAtom } from "jotai";
import { defaultParam, paramAtom } from "../../store/store";
import { loadComponent, LoadingComponent } from "../../lib/util";
import { Box } from "@mui/material";
import CardList from "../../components/Card/CardList";
import LandingPage from "./LandingPage";
import SearchResult from "./SearchResult";

const Main = () => {
  const [param] = useAtom(paramAtom);

  const { isLoading, data } = useQuery<any | Error>(
    [param.keyword, param.country, param.entity, param.limit, param.offset],
    () =>
      getSearchTrack(
        param.keyword,
        param.country,
        param.entity,
        param.limit,
        param.offset
      )
  );

  return (
    <Box sx={{ mt: 9.5 }}>
      {param.keyword === defaultParam.keyword ? (
        <LandingPage />
      ) : (
        <>
          <SearchResult text={param.keyword} />
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
