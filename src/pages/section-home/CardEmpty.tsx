import React from "react";
import { Box } from "@mui/material";

const CardEmpty: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mx: 20,
      }}
    >
      <img
        alt="No Image"
        style={{ maxWidth: 700 }}
        src="https://www.medplus.vn/images/404.png"
      />
    </Box>
  );
};
export default CardEmpty;
