import React from "react";
import { loadComponent } from "../lib/util";
import { useAtom } from "jotai";
import { isFavoriteAtom, paramAtom } from "../store/store";
import SaveLoad from "./section-favorite/SaveLoad";
import SearchResult from "./section-main/SearchResult";
import { requestType } from "../lib/types";
import VolumeDisplay from "../components/VolumeDisplay";
import styled from "styled-components";
import SkipButton from "../components/SkipButton";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../lib/config";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 680px;
  margin-left: 40px;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    width: 600px;
  }
`;

const Header: React.FC = () => {
  const [isFavorite] = useAtom<boolean>(isFavoriteAtom);
  const [param] = useAtom<requestType>(paramAtom);

  return (
    <HeaderWrapper>
      {loadComponent(
        isFavorite,
        <SaveLoad />,
        <SearchResult text={param.keyword} />
      )}
      <VolumeDisplay />
      <SkipButton />
    </HeaderWrapper>
  );
};

export default Header;
