import React, { useState } from "react";
import { Box, colors, List, ListSubheader } from "@mui/material";
import CollapseList from "./CollapseList";
import {
  Album,
  Language,
  LibraryMusic,
  LooksOne,
  LooksTwo,
  Looks3,
  QueueMusic,
  Tv,
  Videocam,
  ViewColumn,
  Web,
} from "@mui/icons-material";
import { columnsAtom, paramAtom } from "../../store/store";
import { useAtom } from "jotai";
import { Kind, requestType } from "../../lib/types";
import { useUpdateAtom } from "jotai/utils";
import { generateColumn } from "../../lib/util";
import { useTranslation } from "react-i18next";
import Sliders from "../Sliders";

interface MenuListProps {
  toggleDrawer: (open: boolean) => void;
}

const MenuList: React.FC<MenuListProps> = ({ toggleDrawer }) => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });
  const [param] = useAtom<requestType>(paramAtom);
  const setParam = useUpdateAtom(paramAtom);
  const [columns] = useAtom<number[]>(columnsAtom);
  const setColumns = useUpdateAtom(columnsAtom);

  const [contentNum, setContentNum] = useState<number | number[]>(param.limit);

  const setEntity = (entity: string) => {
    setParam((prev) => ({ ...prev, entity: entity }));
  };
  const setLimit = (limit: number | number[]) => {
    setParam((prev) => ({ ...prev, limit: limit }));
  };
  const handleContentNumber = (event: Event, value: number | number[]) => {
    setContentNum(value);
    setTimeout(() => setLimit(contentNum), 700);
  };
  const handleColumnNumber = (event: Event, value: number | number[]) => {
    setColumns(generateColumn(value));
  };

  return (
    <Box sx={{ width: 270, backgroundColor: "white" }} role="presentation">
      <List>
        <ListSubheader>{t("menu.header")}</ListSubheader>
        <CollapseList
          icon={<LibraryMusic />}
          text={t("menu.list.0.title")}
          subIcon={[<QueueMusic />, <Tv />, <Album />, <Videocam />]}
          onClick={[
            () => setEntity(Kind.Song),
            () => setEntity(Kind.Tv),
            () => setEntity(Kind.Album),
            () => setEntity(Kind.Video),
          ]}
          subText={[
            t("menu.list.0.item.0"),
            t("menu.list.0.item.1"),
            t("menu.list.0.item.2"),
            t("menu.list.0.item.3"),
          ]}
          toggleDrawer={() => toggleDrawer(false)}
        />
        <CollapseList
          icon={<Web />}
          text={t("menu.list.1.title")}
          subIcon={[<div />]}
          subText={[]}
          onClick={[]}
          children={
            <Sliders
              defaultValue={contentNum}
              color={colors.purple[200]}
              value={contentNum}
              onChange={handleContentNumber}
              step={7}
              min={1}
              max={40}
            />
          }
        />
        <CollapseList
          icon={<ViewColumn />}
          text={t("menu.list.2.title")}
          subIcon={[<div />]}
          subText={[]}
          onClick={[]}
          children={
            <Sliders
              defaultValue={columns.length}
              color={colors.pink[200]}
              step={1}
              value={columns.length}
              onChange={handleColumnNumber}
              min={1}
              max={4}
            />
          }
        />
        <CollapseList
          icon={<Language />}
          text={t("menu.list.3.title")}
          subIcon={[<LooksOne />, <LooksTwo />, <Looks3 />]}
          subText={[
            t("menu.list.3.item.0"),
            t("menu.list.3.item.1"),
            t("menu.list.3.item.2"),
          ]}
          onClick={[
            () => i18n.changeLanguage("en"),
            () => i18n.changeLanguage("ko"),
            () => i18n.changeLanguage("cn"),
          ]}
          toggleDrawer={() => toggleDrawer(false)}
        />
      </List>
    </Box>
  );
};

export default MenuList;
