import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "@mui/material";
import { useTranslation } from "react-i18next";
import { favoriteAtom } from "../../store/store";
import { Result } from "../../lib/types";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { onLoad, onSave } from "../../lib/util";

const SaveLoad: React.FC = () => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });
  const [favoriteList] = useAtom<Result[]>(favoriteAtom);
  const setFavorite = useUpdateAtom(favoriteAtom);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", mx: 7 }}>
      <Button onClick={() => onSave("iTunes", favoriteList)}>
        <Typography color={colors.pink[200]}>
          {t("favorite.btn.save")}
        </Typography>
      </Button>
      <Button onClick={() => onLoad("iTunes", setFavorite)}>
        <Typography color={colors.pink[200]}>
          {t("favorite.btn.load")}
        </Typography>
      </Button>
    </Box>
  );
};

export default SaveLoad;
