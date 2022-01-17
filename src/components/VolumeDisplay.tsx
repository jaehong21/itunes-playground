import React from "react";
import Sliders from "./Sliders";
import { useAtom } from "jotai";
import { defaultVolume, volumeAtom } from "../store/store";
import { useUpdateAtom } from "jotai/utils";
import { colors, Typography } from "@mui/material";
import Icon from "./Icon";
import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import styled from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH, transition } from "../lib/config";

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 300px;
  margin-top: 3px;
  margin-left: 22px;
  transition: ${transition};
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-left: 10px;
    width: 240px;
  }
`;

const VolumeDisplay: React.FC = () => {
  const [volume] = useAtom<number | number[]>(volumeAtom);
  const setVolume = useUpdateAtom(volumeAtom);
  const handleVolume = (event: Event, value: number | number[]) => {
    setVolume(value);
  };

  const VolumeIcon: React.FC = () => {
    switch (true) {
      case volume === 0:
        return <VolumeOff />;
      case volume > 0 && volume <= 20:
        return <VolumeMute />;
      case volume > 20 && volume <= 65:
        return <VolumeDown />;
      case volume > 65:
        return <VolumeUp />;
      default:
        return <VolumeDown />;
    }
  };

  return (
    <Root>
      <Icon
        children={<VolumeIcon />}
        onClick={() => setVolume(volume ? 0 : defaultVolume)}
      />
      <Sliders
        color={colors.pink[100]}
        defaultValue={volume}
        step={1}
        value={volume}
        onChange={handleVolume}
        min={0}
        max={100}
        marks={false}
        valueLabelDisplay="off"
      />
      <Typography fontWeight="bold">{volume}</Typography>
    </Root>
  );
};
export default VolumeDisplay;
