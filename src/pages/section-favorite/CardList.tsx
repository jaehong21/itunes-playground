import React from "react";
import { Box, Button, Fade, Typography } from "@mui/material";
import { Card, CardContent, CardActions } from "@mui/material";
import { Result } from "../../lib/types";
import CardTrack from "../../components/CardTrack";
import { useNavigate } from "react-router-dom";

type CardListProps = {
  tracks: Result[];
  count: number;
};

const CardList: React.FC<CardListProps> = ({ tracks, count }) => {
  const navigate = useNavigate();

  return (
    <Fade in timeout={1500}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 5,
          mt: 3,
        }}
      >
        {count === 0 && (
          <Card sx={{ minWidth: 270, minHeight: 200, mx: 3, my: 5 }}>
            <CardContent>
              <Typography variant="h5" component="div" fontWeight="bold">
                Sad ...
              </Typography>
              <Typography
                fontSize="12px"
                sx={{ mt: 1.5 }}
                color="text.secondary"
              >
                Advice:
              </Typography>
              <Typography variant="body2">
                you need to at least one music
                <br />
                to view contents on this page
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate("/")}>
                Go Back to Main
              </Button>
            </CardActions>
          </Card>
        )}
        <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
          {tracks.map(
            (track: any, index: number) =>
              index % 3 === 0 && (
                <CardTrack track={track} index={index} key={index} />
              )
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            mt: 7,
          }}
        >
          {tracks.map(
            (track: any, index: number) =>
              index % 3 === 1 && (
                <CardTrack track={track} index={index} key={index} />
              )
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
          {tracks.map(
            (track: any, index: number) =>
              index % 3 === 2 && (
                <CardTrack track={track} index={index} key={index} />
              )
          )}
        </Box>
      </Box>
    </Fade>
  );
};

export default CardList;
