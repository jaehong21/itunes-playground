import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  text: string;
}

const SearchResult: React.FC<Props> = ({ text }) => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });

  return (
    <Typography
      component="div"
      fontSize="20px"
      sx={{ mx: 7, alignItems: "center" }}
    >
      {t("main.search")}
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
