import React from "react";
import { Button, Typography } from "@mui/material";
import { colors } from "@mui/material";

const SaveButton: React.FC = () => {
  return (
    <Button>
      <Typography color={colors.pink[200]}>Save</Typography>
    </Button>
  );
};

export default SaveButton;
