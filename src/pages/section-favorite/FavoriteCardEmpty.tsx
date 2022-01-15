import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { isFavoriteAtom } from "../../store/store";
import { useUpdateAtom } from "jotai/utils";
import { useTranslation } from "react-i18next";

const FavoriteCardEmpty: React.FC = () => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });
  const setIsFavorite = useUpdateAtom(isFavoriteAtom);

  return (
    <Card sx={{ minWidth: 270, minHeight: 200, mx: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold">
          {t("favorite.notice.title")}
        </Typography>
        <Typography fontSize="12px" sx={{ mt: 1.5 }} color="text.secondary">
          {t("favorite.notice.advice")}
        </Typography>
        <Typography variant="body2">
          {t("favorite.notice.description.0")}
          <br />
          {t("favorite.notice.description.1")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setIsFavorite(false)}>
          <Typography color="gray">{t("favorite.notice.btn")}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavoriteCardEmpty;
