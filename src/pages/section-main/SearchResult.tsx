import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const SearchTitle = styled.div`
  align-items: center;
  font-size: 20px;
`;
const SearchDescription = styled.div`
  display: inline-block;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
`;

interface SearchResultProps {
  text: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ text }) => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });

  return (
    <SearchTitle>
      {t("main.header.search")}
      <SearchDescription>{text}</SearchDescription>
    </SearchTitle>
  );
};

export default SearchResult;
