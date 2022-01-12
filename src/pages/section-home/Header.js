import React, { useState } from "react";
import { Typography, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu, Search, Favorite } from "@mui/icons-material";

import { useUpdateAtom } from "jotai/utils";
import { keywordAtom } from "../../stores";

const Header = () => {
  const [input, setInput] = useState("");
  const setKeyword = useUpdateAtom(keywordAtom);

  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="default"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h5"
          color="black"
          sx={{ fontWeight: "bold", flexGrow: 1 }}
        >
          iTunes - Playground
        </Typography>
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
                setKeyword(input);
                setInput("");
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
        >
          <Favorite sx={{ color: "#FD1D1D", opacity: 0.7 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
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
