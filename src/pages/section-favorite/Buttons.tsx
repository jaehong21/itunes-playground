import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "@mui/material";
import { useTranslation } from "react-i18next";

const Buttons: React.FC = () => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });

  return (
    <Box sx={{ display: "flex", flexDirection: "row", mx: 7 }}>
      <Button>
        <Typography color={colors.pink[200]}>
          {t("favorite.btn.save")}
        </Typography>
      </Button>
      <Button>
        <Typography color={colors.pink[200]}>
          {t("favorite.btn.load")}
        </Typography>
      </Button>
    </Box>
  );
};

export default Buttons;
