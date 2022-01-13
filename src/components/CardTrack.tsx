import { Box, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Grow, IconButton, easing } from "@mui/material";
import { arrFilter, isDuplicate } from "../lib/util";
import { Favorite } from "@mui/icons-material";
import React, { useState } from "react";
import { Result } from "../lib/types";
import { useAtom } from "jotai";
import { favoriteAtom } from "../stores";
import { useUpdateAtom } from "jotai/utils";

type CardTrackProps = {
  track: Result;
  index: number;
};

const CardTrack: React.FC<CardTrackProps> = ({ track, index }) => {
  const [favoriteList] = useAtom<Result[]>(favoriteAtom);
  const setFavorite = useUpdateAtom(favoriteAtom);
  const [focus, setFocus] = useState<number>(3);

  return (
    <Grow in timeout={400 * index} easing={{ enter: easing.easeOut }}>
      <Paper
        onMouseEnter={() => setFocus(14)}
        onMouseLeave={() => setFocus(3)}
        elevation={focus}
        sx={{
          display: "flex",
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
                if (!isDuplicate(favoriteList, track.trackId)) {
                  setFavorite([...favoriteList, track]);
                  console.log("Add");
                } else {
                  setFavorite(arrFilter(favoriteList, track.trackId));
                  console.log("Delete");
                }
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
          sx={{ position: "relative", minWidth: 150 }}
          image={track.artworkUrl100}
          alt="No Image"
        />
      </Paper>
    </Grow>
  );
};

export default CardTrack;
