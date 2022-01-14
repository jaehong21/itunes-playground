import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { Menu, Favorite } from "@mui/icons-material";
import { useUpdateAtom } from "jotai/utils";
import Input from "./Input";
import SideMenu from "./Menu/SideMenu";
import Icon from "./Icon";
import { defaultParam, isFavoriteAtom, paramAtom } from "../store/store";
import { useAtom } from "jotai";
import styled from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../lib/config";

const Title = styled(Typography)`
  font-size: 26px;
  font-weight: bold;
  color: black;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    width: 250px;
    font-size: 20px;
  }
`;

const AppHeader = () => {
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const setParam = useUpdateAtom(paramAtom);
  const [isFavorite] = useAtom(isFavoriteAtom);
  const setIsFavorite = useUpdateAtom(isFavoriteAtom);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const onClickMenu = () => {
    setParam((prev) => ({ ...prev, keyword: defaultParam.keyword }));
    setIsFavorite(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onKeyPressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setParam((prev) => ({ ...prev, offset: defaultParam.offset }));
      setParam((prev) => ({ ...prev, keyword: input }));
      setInput("");
      setIsFavorite(false);
    }
  };

  return (
    <>
      <Box sx={{ mb: 10 }}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Icon
              children={<Menu />}
              color="gray"
              mr={1}
              onClick={() => setOpen(!open)}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Title
                onClick={onClickMenu}
                variant="h5"
                color="black"
                sx={{ fontWeight: "bold" }}
              >
                iTunes - Playground
              </Title>
            </Box>
            <Input
              placeholder="Search"
              value={input}
              onChange={onChange}
              onKeyPress={onKeyPressEnter}
            />
            <Icon
              onClick={onClickFavorite}
              children={<Favorite />}
              checked={isFavorite}
              subColor="#FD1D1D"
              color="gray"
              opacity={0.7}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <SideMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default AppHeader;
