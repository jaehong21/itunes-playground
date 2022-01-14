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
