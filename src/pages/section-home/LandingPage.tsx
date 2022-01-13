import React from "react";
import { Box, Typography, Grow, CardActionArea } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { keywordAtom, defaultKeyword } from "../../stores";
import { useAtom } from "jotai";

type LandingCardProps = {
  order: number;
  title: string;
  description: string;
  imgURL: string;
};

const LandingPage: React.FC = () => {
  const [keyword] = useAtom(keywordAtom);

  const LandingCard: React.FC<LandingCardProps> = ({
    order,
    title,
    description,
    imgURL,
  }) => {
    return (
      <Grow in timeout={order * 1000}>
        <Card sx={{ maxWidth: 260, maxHeight: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={imgURL}
              alt="No Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grow>
    );
  };

  return (
    <>
      {keyword === defaultKeyword && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ my: 4 }}>
            Enjoy your Music on iTunes
          </Typography>
          <Typography variant="subtitle1">
            You can easily and quickly search all the songs provided by Apple
            Music on this site
          </Typography>
          <Typography variant="subtitle1">
            Also you can come back to listen to the song you want.
          </Typography>
          <Box
            sx={{
              width: "75%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              my: 7,
            }}
          >
            <LandingCard
              order={1}
              title="Various Genres"
              description="Link to iTunes where more than 1000 musics exist"
              imgURL="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?size=626&ext=jpg&ga=GA1.2.838424457.1636502400"
            />
            <LandingCard
              order={2}
              title="Fast Speed"
              description="Apple Music API provides fast and accurate search engine"
              imgURL="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlZWR8ZW58MHx8MHx8&w=1000&q=80"
            />
            <LandingCard
              order={3}
              title="Save Favorite Musics"
              description="You can save your favorite music and comeback anytime"
              imgURL="https://cdn.vox-cdn.com/thumbor/Q7sCkizLUJ9z79LHLcyA9Oht-KY=/0x0:2040x1360/1200x800/filters:focal(385x271:711x597)/cdn.vox-cdn.com/uploads/chorus_image/image/55532081/hero.0.1498855501.jpg"
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default LandingPage;
