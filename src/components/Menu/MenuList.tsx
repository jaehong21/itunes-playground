import React, { useState } from "react";
import { Box, colors, List, ListSubheader, Slider } from "@mui/material";
import CollapseList from "./CollapseList";
import {
  Album,
  Language,
  LibraryMusic,
  LooksOne,
  LooksTwo,
  MenuBook,
  QueueMusic,
  Tv,
  Videocam,
  ViewColumn,
  Web,
} from "@mui/icons-material";
import { columnsAtom, paramAtom } from "../../store/store";
import { useAtom } from "jotai";
import { requestType } from "../../lib/types";
import { useUpdateAtom } from "jotai/utils";
interface MenuListProps {
  toggleDrawer: (open: boolean) => void;
}

const MenuList: React.FC<MenuListProps> = ({ toggleDrawer }) => {
  const [param] = useAtom<requestType>(paramAtom);
  const setParam = useUpdateAtom(paramAtom);
  const [columns] = useAtom<number[]>(columnsAtom);
  const setColumns = useUpdateAtom(columnsAtom);

  const [content, setContent] = useState<any>(param.limit);

  const handleContentNumber = (event: Event, value: number | number[]) => {
    setContent(value);
    setTimeout(() => setParam((prev) => ({ ...prev, limit: content })), 700);
  };
  const handleColumnNumber = (event: Event, value: number | number[]) => {
    setTimeout(() =>
      setColumns(function (): number[] {
        let arr: number[] = [];
        for (let i = 0; i < value; i++) {
          arr.push(i);
        }
        return arr;
      })
    );
  };

  return (
    <Box sx={{ width: 270, backgroundColor: "white" }} role="presentation">
      <List>
        <ListSubheader>Settings</ListSubheader>
        <CollapseList
          icon={<LibraryMusic />}
          text="Song type"
          subIcon={[
            <QueueMusic />,
            <MenuBook />,
            <Tv />,
            <Album />,
            <Videocam />,
          ]}
          subText={["song", "book", "TV-Episode", "Album", "Music-Video"]}
          onClick={() => toggleDrawer(false)}
        />
        <CollapseList
          icon={<Web />}
          text="Contents per page"
          subIcon={[<div />]}
          subText={[""]}
          children={
            <Slider
              sx={{ mx: 2, color: colors.purple[200] }}
              defaultValue={param.limit}
              valueLabelDisplay="auto"
              value={content}
              onChange={(event, value) => handleContentNumber(event, value)}
              step={7}
              marks
              min={1}
              max={40}
            />
          }
        />
        <CollapseList
          icon={<ViewColumn />}
          text="Number of Columns"
          subIcon={[<div />]}
          subText={[""]}
          children={
            <Slider
              sx={{ mx: 2, color: colors.pink[200] }}
              defaultValue={columns.length}
              valueLabelDisplay="auto"
              step={1}
              onChange={(event, value) => handleColumnNumber(event, value)}
              marks
              min={1}
              max={4}
            />
          }
        />
        <CollapseList
          icon={<Language />}
          text="Location"
          subIcon={[<LooksOne />, <LooksTwo />]}
          subText={["United States", "Republic of Korea"]}
          onClick={() => toggleDrawer(false)}
        />
      </List>
    </Box>
  );
};

export default MenuList;
