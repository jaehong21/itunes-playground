import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { arrFilter, WINDOW_WIDTH } from "../../lib/util";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { favoriteAtom } from "../../stores";
import { isDuplicate } from "../../lib/util";

const CardList = ({ tracks }) => {
  const [favoriteList] = useAtom(favoriteAtom);
  const setFavorite = useUpdateAtom(favoriteAtom);

  const CardTrack = ({ track, index }) => {
    return (
      <Card
        key={index}
        raised={true}
        sx={{
          display: "flex",
          width: WINDOW_WIDTH / 3.7,
          mb: 4,
          mx: 4,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {track.trackName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {track.artistName}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton
              onClick={() => {
                if (!isDuplicate(favoriteList, track.trackId))
                  setFavorite([...favoriteList, track.trackId]);
                else setFavorite(arrFilter(favoriteList, track.trackId));
                console.log(favoriteList);
                setTimeout(() => {
                  localStorage.setItem(
                    "itunes-playground-favorite",
                    JSON.stringify(favoriteList)
                  );
                }, 200);
              }}
            >
              <Favorite
                sx={{
                  color: isDuplicate(favoriteList, track.trackId)
                    ? "#FD1D1D"
                    : null,
                  opacity: 0.7,
                }}
              />
            </IconButton>
            <IconButton>
              <a
                href={track.trackViewUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "gray",
                }}
              >
                {track.trackViewUrl.substring(0, 29)}...
              </a>
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ position: "relative", width: 151 }}
          image={track.artworkUrl100}
          alt="No Image"
        />
      </Card>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mx: 5,
        mt: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {tracks.map(
          (track, index) =>
            index % 3 === 0 && (
              <CardTrack track={track} index={index} key={index} />
            )
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 7 }}>
        {tracks.map(
          (track, index) =>
            index % 3 === 1 && (
              <CardTrack track={track} index={index} key={index} />
            )
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {tracks.map(
          (track, index) =>
            index % 3 === 2 && (
              <CardTrack track={track} index={index} key={index} />
            )
        )}
      </Box>
    </Box>
  );
};

export default CardList;
