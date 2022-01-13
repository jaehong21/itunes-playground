import React, { useRef, useEffect } from "react";
import {
  defaultLimit,
  entityAtom,
  keywordAtom,
  limitAtom,
  offsetAtom,
} from "../stores";
import { useUpdateAtom } from "jotai/utils";
import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { getSearchTrack } from "../lib/api";

const FetchMore: React.FC = () => {
  const [keyword] = useAtom<string>(keywordAtom);
  const [entity] = useAtom<string>(entityAtom);
  const [limit] = useAtom<number>(limitAtom);
  const [offset] = useAtom<number>(offsetAtom);
  const setLimit = useUpdateAtom(limitAtom);
  const setOffset = useUpdateAtom(offsetAtom);

  const fetchMoreTrigger = useRef<HTMLDivElement>(null);
  const fetchMoreObserver = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
      }
    },
    { rootMargin: "1px" }
  );

  useEffect(() => {
    //@ts-ignore
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      //@ts-ignore
      fetchMoreObserver.unobserve(fetchMoreTrigger.current);
    };
  }, []);

  return <div id="fetchMore" ref={fetchMoreTrigger} />;
};

export default FetchMore;
