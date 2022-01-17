import React, { useEffect, useState } from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Grow,
  easing,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Result } from "../../lib/types";
import { favoriteAtom, volumeAtom } from "../../store/store";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { arrFilter, isDuplicate, onSave } from "../../lib/util";
import Icon from "../Icon";
import Shortcut from "../Shortcut";

import ReactPlayer from "react-player";

interface Props {
  track: Result;
  index: number;
}

const CardTrack: React.FC<Props> = ({ track, index }) => {
  const [favoriteList] = useAtom<Result[]>(favoriteAtom);
  const [volume] = useAtom<number | number[]>(volumeAtom);
  const setFavorite = useUpdateAtom(favoriteAtom);
  const [focus, setFocus] = useState<boolean>(false);

  const onClickFavorite = () => {
    if (!isDuplicate(favoriteList, track.trackId)) {
      setFavorite([...favoriteList, track]);
      console.log("Add");
    } else {
      setFavorite(arrFilter(favoriteList, track.trackId));
      console.log("Delete");
    }
  };

  useEffect(() => {
    onSave("iTunes", favoriteList);
  }, [favoriteList]);

  return (
    <Grow in timeout={500 * index} easing={{ enter: easing.easeOut }}>
      <Paper
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        elevation={focus ? 10 : 1}
        sx={{
          display: "flex",
          minWidth: "420px",
          mb: 4,
        }}
      >
        <ReactPlayer
          style={{ display: "none" }}
          url={track.previewUrl}
          // @ts-ignore
          volume={volume / 100}
          loop={true}
          playing={focus}
        />
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
            <Icon
              onClick={onClickFavorite}
              children={<Favorite />}
              checked={isDuplicate(favoriteList, track.trackId)}
              color="gray"
              subColor="#FD1D1D"
              opacity={0.7}
            />
            <Shortcut
              text={
                track.trackViewUrl && track.trackViewUrl.slice(0, 29) + "..."
              }
              href={track.trackViewUrl}
              fontSize={14}
              color="gray"
            />
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ minWidth: 150 }}
          image={track.artworkUrl100}
          alt="No Image"
        />
      </Paper>
    </Grow>
  );
};

export default CardTrack;
