import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../lib/config";
import Icon from "./Icon";

interface Props extends React.HTMLProps<HTMLInputElement> {
  children?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
}

const SearchWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
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
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(3),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
}));

const Input: React.FC<Props> = ({
  children,
  placeholder,
  value,
  onChange,
  onKeyPress,
}) => {
  return (
    <SearchWrapper>
      <Icon children={<Search />} color="white" />
      <StyledInputBase
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {children}
    </SearchWrapper>
  );
};

export default Input;
