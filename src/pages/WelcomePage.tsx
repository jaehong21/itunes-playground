import React from "react";
import { Box, Typography, CardActionArea } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../lib/config";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface WelcomeCardProps {
  title: string;
  description: string;
  imgURL: string;
}

const WelcomeCardWrapper = styled.div`
  display: flex;
  width: 75%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 7ch;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-top: 2ch;
    flex-direction: column;
  }
`;

const WelcomeDescription = styled(Typography)`
  line-height: 24px;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: 14px;
  }
`;

const WelcomePage: React.FC = () => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });

  const WelcomeCard: React.FC<WelcomeCardProps> = ({
    title,
    description,
    imgURL,
  }) => {
    return (
      <Card sx={{ maxWidth: 260, maxHeight: 300, mb: 3 }}>
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
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ my: 4 }}>
        {t("welcome.title")}
      </Typography>
      <WelcomeDescription>{t("welcome.description.0")}</WelcomeDescription>
      <WelcomeDescription>{t("welcome.description.1")}</WelcomeDescription>
      <WelcomeCardWrapper>
        <WelcomeCard
          title={t("welcome.card.0.title")}
          description={t("welcome.card.0.description")}
          imgURL="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?size=626&ext=jpg&ga=GA1.2.838424457.1636502400"
        />
        <WelcomeCard
          title={t("welcome.card.1.title")}
          description={t("welcome.card.1.description")}
          imgURL="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlZWR8ZW58MHx8MHx8&w=1000&q=80"
        />
        <WelcomeCard
          title={t("welcome.card.2.title")}
          description={t("welcome.card.2.description")}
          imgURL="https://cdn.vox-cdn.com/thumbor/Q7sCkizLUJ9z79LHLcyA9Oht-KY=/0x0:2040x1360/1200x800/filters:focal(385x271:711x597)/cdn.vox-cdn.com/uploads/chorus_image/image/55532081/hero.0.1498855501.jpg"
        />
      </WelcomeCardWrapper>
    </Box>
  );
};

export default WelcomePage;
