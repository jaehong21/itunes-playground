import React from "react";
import { useQuery } from "react-query";
import { getSearchTrack } from "../../lib/api";
import { useAtom } from "jotai";
import { keywordAtom } from "../../stores";
import { loadComponent, LoadingComponent } from "../../lib/util";
import CardList from "./CardList";
import { Box, Typography } from "@mui/material";

const Main = () => {
  const [keyword] = useAtom(keywordAtom);
  const { isLoading, data } = useQuery(["track", keyword], () =>
    getSearchTrack(keyword, 30)
  );

  return (
    <Box sx={{ mt: 9 }}>
      {keyword === "" ? (
        <LoadingComponent />
      ) : (
        <Typography variant="div" fontSize="25px" sx={{ mx: 9 }}>
          Search result for :{" "}
          <Typography
            variant="div"
            fontSize="30px"
            sx={{ display: "inline-block" }}
          >
            {keyword}
          </Typography>
        </Typography>
      )}
      {loadComponent(
        isLoading,
        <LoadingComponent />,
        data && (
          <div>
            <CardList tracks={data.data.results} />
          </div>
        )
      )}
    </Box>
  );
};

export default Main;
