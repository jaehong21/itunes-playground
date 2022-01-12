import React from "react";
import { useQuery } from "react-query";
import { getSearchTrack } from "../../lib/api";
import { useAtom } from "jotai";
import { defaultKeyword, keywordAtom, limitAtom } from "../../stores";
import { loadComponent, LoadingComponent } from "../../lib/util";
import { Box, Typography, Slide, Collapse } from "@mui/material";
import CardList from "./CardList";
import LandingPage from "./LandingPage";

const Main = () => {
  const [keyword] = useAtom(keywordAtom);
  const [limit] = useAtom(limitAtom);
  const { isLoading, error, data } = useQuery<any | Error>([keyword], () =>
    getSearchTrack(keyword, limit)
  );

  return (
    <Box sx={{ mt: 9.5 }}>
      {keyword === defaultKeyword ? (
        <LandingPage />
      ) : (
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
      )}
      {loadComponent(
        isLoading,
        <Collapse in>
          <LoadingComponent />
        </Collapse>,
        data && <CardList tracks={data.data.results} />
      )}
    </Box>
  );
};

export default Main;
