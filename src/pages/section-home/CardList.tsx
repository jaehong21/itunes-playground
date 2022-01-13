import React from "react";
import { Box, IconButton } from "@mui/material";
import { Result } from "../../lib/types";
import CardTrack from "../../components/CardTrack";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useAtom } from "jotai";
import { limitAtom, offsetAtom } from "../../stores";
import { useUpdateAtom } from "jotai/utils";

type CardListProps = {
  tracks: Result[];
  count: number | undefined;
};

const CardList: React.FC<CardListProps> = ({ tracks, count }) => {
  const [limit] = useAtom<number>(limitAtom);
  const [offset] = useAtom<number>(offsetAtom);
  const setOffset = useUpdateAtom(offsetAtom);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mx: 5,
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
      {offset > 0 && (
        <IconButton
          sx={{ maxWidth: 30, maxHeight: 40 }}
          onClick={() => setOffset(offset - limit)}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>
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
      {count !== 0 && (
        <IconButton
          sx={{ maxWidth: 30, maxHeight: 40 }}
          onClick={() => setOffset(offset + limit)}
        >
          <ChevronRight fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default CardList;
