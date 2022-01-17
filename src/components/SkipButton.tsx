import React from "react";
import Icon from "./Icon";
import { SkipNext, SkipPrevious } from "@mui/icons-material";
import styled from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../lib/config";
import { useAtom } from "jotai";
import { paramAtom } from "../store/store";
import { requestType } from "../lib/types";
import { useUpdateAtom } from "jotai/utils";
import { useTranslation } from "react-i18next";

const Root = styled.div`
  display: inline-block;
  margin-left: 50px;
  @media (${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-left: 20px;
  }
`;

const SkipButton: React.FC = () => {
  const [t, i18n] = useTranslation("lang", { useSuspense: false });
  const [param] = useAtom<requestType>(paramAtom);
  const setParam = useUpdateAtom(paramAtom);

  const onNext = () => {
    //@ts-ignore
    setParam((prev) => ({ ...prev, offset: param.offset + param.limit }));
  };
  const onPrevious = () => {
    if (param.offset > 0)
      //@ts-ignore
      setParam((prev) => ({ ...prev, offset: param.offset - param.limit }));
    else alert(t("main.header.alert"));
  };

  return (
    <Root>
      <Icon children={<SkipPrevious />} onClick={onPrevious} />
      <Icon children={<SkipNext />} onClick={onNext} />
    </Root>
  );
};

export default SkipButton;
