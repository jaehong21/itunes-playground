import React, { useState } from "react";
import { Typography, InputBase, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu, Search, Favorite } from "@mui/icons-material";

import { useUpdateAtom } from "jotai/utils";
import {
  defaultKeyword,
  defaultOffset,
  keywordAtom,
  offsetAtom,
} from "../stores";
import { useNavigate } from "react-router-dom";
import MenuList from "./MenuList";

const Header = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const setKeyword = useUpdateAtom(keywordAtom);
  const setOffset = useUpdateAtom(offsetAtom);

  return (
    <>
      <Box sx={{ mb: 10 }}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <button
                onClick={() => {
                  setKeyword(defaultKeyword);
                  navigate("/");
                }}
                style={{ backgroundColor: "white", border: "none" }}
              >
                <Typography
                  variant="h5"
                  color="black"
                  sx={{ fontWeight: "bold" }}
                >
                  iTunes - Playground
                </Typography>
              </button>
            </Box>
            <SearchWrapper>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setOffset(defaultOffset);
                    setKeyword(input);
                    setInput("");
                    navigate("/");
                  }
                }}
              />
            </SearchWrapper>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => {
                if (window.location.pathname === "/") navigate("/favorite");
                else navigate("/");
              }}
            >
              <Favorite
                sx={{
                  color:
                    window.location.pathname === "/favorite" ? "#FD1D1D" : null,
                  opacity: 0.7,
                }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <MenuList open={open} setOpen={setOpen} />
    </>
  );
};

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: "20px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.35),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default Header;
