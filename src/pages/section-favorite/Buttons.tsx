import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "@mui/material";
import { useTranslation } from "react-i18next";
import { favoriteAtom } from "../../store/store";
import { Result } from "../../lib/types";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";

const Buttons: React.FC = () => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });
  const [favorite] = useAtom<Result[]>(favoriteAtom);
  const setFavorite = useUpdateAtom(favoriteAtom);

  const onSave = () => {
    localStorage.setItem("iTunes", JSON.stringify(favorite));
  };
  const onLoad = () => {
    setFavorite(JSON.parse(localStorage.getItem("iTunes") as string));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", mx: 7 }}>
      <Button onClick={onSave}>
        <Typography color={colors.pink[200]}>
          {t("favorite.btn.save")}
        </Typography>
      </Button>
      <Button onClick={onLoad}>
        <Typography color={colors.pink[200]}>
          {t("favorite.btn.load")}
        </Typography>
      </Button>
    </Box>
  );
};

export default Buttons;
