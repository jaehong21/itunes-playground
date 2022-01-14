import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { Menu, Favorite } from "@mui/icons-material";
import { useUpdateAtom } from "jotai/utils";
import {
  defaultKeyword,
  defaultOffset,
  keywordAtom,
  offsetAtom,
} from "../stores";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Input from "./Input";
import MenuList from "./MenuList";
import Icon from "./Icon";

const AppHeader = () => {
  const navigate: NavigateFunction = useNavigate();
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const setKeyword = useUpdateAtom(keywordAtom);
  const setOffset = useUpdateAtom(offsetAtom);

  const onClickFavorite = () => {
    if (window.location.pathname === "/") navigate("/favorite");
    else navigate("/");
  };

  const onClickMenu = () => {
    setKeyword(defaultKeyword);
    navigate("/");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onKeyPressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setOffset(defaultOffset);
      setKeyword(input);
      setInput("");
      navigate("/");
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
              <Typography
                onClick={onClickMenu}
                variant="h5"
                color="black"
                sx={{ fontWeight: "bold" }}
              >
                iTunes - Playground
              </Typography>
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
              checked={window.location.pathname === "/favorite"}
              subColor="#FD1D1D"
              color="gray"
              opacity={0.7}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <MenuList open={open} setOpen={setOpen} />
    </>
  );
};

export default AppHeader;
