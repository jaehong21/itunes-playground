import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  colors,
  Typography,
} from "@mui/material";
import { isFavoriteAtom } from "../../store/store";
import { useUpdateAtom } from "jotai/utils";

const FavoriteCardEmpty: React.FC = () => {
  const setIsFavorite = useUpdateAtom(isFavoriteAtom);

  return (
    <Card sx={{ minWidth: 270, minHeight: 200, mx: 3, my: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold">
          Sad ...
        </Typography>
        <Typography fontSize="12px" sx={{ mt: 1.5 }} color="text.secondary">
          Advice:
        </Typography>
        <Typography variant="body2">
          you need to at least one music
          <br />
          to view contents on this page
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setIsFavorite(false)}>
          <Typography color={colors.pink[400]}>Back to Main</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavoriteCardEmpty;
