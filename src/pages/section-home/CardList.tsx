import React from "react";
import { Box, Typography, IconButton, Slide } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { isDuplicate, arrFilter } from "../../lib/util";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { favoriteAtom } from "../../stores";
import { Result } from "../../lib/types";

type CardListProps = {
  tracks: Result[];
  count: number;
};

type CardTrackProps = {
  track: Result;
  index: number;
};

const CardList: React.FC<CardListProps> = ({ tracks, count }) => {
  const [favoriteList] = useAtom(favoriteAtom);
  const setFavorite = useUpdateAtom(favoriteAtom);

  const CardTrack = ({ track, index }: CardTrackProps) => {
    return (
      <Card
        key={index}
        raised={true}
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
                if (!isDuplicate(favoriteList, track.trackId))
                  setFavorite([...favoriteList, track.trackId]);
                else setFavorite(arrFilter(favoriteList, track.trackId));
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
      </Card>
    );
  };

  return (
    <Slide direction="up" in timeout={700}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 5,
          mt: 3,
        }}
      >
        {count === 0 && (
          <Box
            sx={{
              display: "flex",
              mx: 20,
            }}
          >
            <img
              style={{ maxWidth: 700 }}
              src="https://www.medplus.vn/images/404.png"
            />
          </Box>
        )}
        <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
          {tracks.map(
            (track: any, index: number) =>
              index % 3 === 0 && (
                <CardTrack track={track} index={index} key={index} />
              )
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            mt: 7,
          }}
        >
          {tracks.map(
            (track: any, index: number) =>
              index % 3 === 1 && (
                <CardTrack track={track} index={index} key={index} />
              )
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
          {tracks.map(
            (track: any, index: number) =>
              index % 3 === 2 && (
                <CardTrack track={track} index={index} key={index} />
              )
          )}
        </Box>
      </Box>
    </Slide>
  );
};

export default CardList;
