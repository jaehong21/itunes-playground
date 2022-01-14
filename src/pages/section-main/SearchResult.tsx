import React from "react";
import { Typography } from "@mui/material";

interface Props {
  text: string;
}

const SearchResult: React.FC<Props> = ({ text }) => {
  return (
    <Typography
      component="div"
      fontSize="20px"
      sx={{ mx: 9, alignItems: "center" }}
    >
      Search result for :{" "}
      <Typography
        component="div"
        fontSize="22px"
        fontWeight="bold"
        sx={{ display: "inline-block" }}
      >
        {text}
      </Typography>
    </Typography>
  );
};

export default SearchResult;
