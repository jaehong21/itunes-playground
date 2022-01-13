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
import { Box, Typography, Collapse } from "@mui/material";
import CardList from "./CardList";
import LandingPage from "./LandingPage";

const Main = () => {
  const [keyword] = useAtom(keywordAtom);
  const [limit] = useAtom(limitAtom);
  const [entity] = useAtom(entityAtom);
  const [offset] = useAtom(offsetAtom);

  const { isLoading, error, data } = useQuery<any | Error>(
    [keyword, entity, limit, offset],
    () => getSearchTrack(keyword, entity, limit, offset)
  );

  return (
    <Box sx={{ mt: 9.5 }}>
      <LandingPage />
      {!(keyword === defaultKeyword) && (
        <>
          <Typography
            component="div"
            fontSize="20px"
            sx={{ mx: 9, alignItems: "center" }}
          >
            Search result for :{" "}
            <Typography
              component="div"
              fontSize="22px"
              fontWeight="bold"
              sx={{ display: "inline-block" }}
            >
              {keyword}
            </Typography>
          </Typography>
          {loadComponent(isLoading, <LoadingComponent />, <></>)}
          {data && (
            <CardList
              tracks={data.data.results}
              count={data.data.resultCount}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default Main;
