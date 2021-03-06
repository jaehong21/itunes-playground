import React from "react";
import { Box, Fade } from "@mui/material";
import { Result } from "../../lib/types";
import CardTrack from "./CardTrack";

import styled from "styled-components";
import FavoriteCardEmpty from "../../pages/section-favorite/FavoriteCardEmpty";
import { useAtom } from "jotai";
import { columnsAtom, isFavoriteAtom } from "../../store/store";
import CardEmpty from "../../pages/section-main/CardEmpty";
import { loadComponent } from "../../lib/util";

interface Props {
  tracks: Result[];
  count: number | undefined;
  page: string;
}

const CardTrackColumn = styled.div<{ column: number }>`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  margin-top: ${(props) => (props.column % 2 === 0 ? 0 : 50)}px;
  margin-right: 10%;
`;

const CardList: React.FC<Props> = ({ tracks, count, page }) => {
  const [columns] = useAtom<number[]>(columnsAtom);
  const [isFavorite] = useAtom<boolean>(isFavoriteAtom);

  return (
    <Fade in timeout={1500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 5,
          mt: 3,
        }}
      >
        {count === 0 &&
          loadComponent(!isFavorite, <CardEmpty />, <FavoriteCardEmpty />)}
        {columns.map((column, columnIndex) => (
          <CardTrackColumn column={columnIndex} key={columnIndex}>
            {tracks.map(
              (track: any, trackIndex) =>
                trackIndex % columns.length === columnIndex && (
                  <CardTrack
                    track={track}
                    index={trackIndex}
                    key={trackIndex}
                  />
                )
            )}
          </CardTrackColumn>
        ))}
      </Box>
    </Fade>
  );
};

export default CardList;
