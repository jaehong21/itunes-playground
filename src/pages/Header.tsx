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

const HeaderWrapper = styled.div<{ isFavorite: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => (props.isFavorite ? "600px" : "680px")};
  margin-left: 40px;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    ${(props) => (props.isFavorite ? "800px" : "680px")};
  }
`;

const Header: React.FC = () => {
  const [isFavorite] = useAtom<boolean>(isFavoriteAtom);
  const [param] = useAtom<requestType>(paramAtom);

  return (
    <HeaderWrapper isFavorite={isFavorite}>
      {loadComponent(
        isFavorite,
        <SaveLoad />,
        <SearchResult text={param.keyword} />
      )}
      <VolumeDisplay />
      {!isFavorite && <SkipButton />}
    </HeaderWrapper>
  );
};

export default Header;
