import React, { useState } from "react";
import { Collapse, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Country, Kind, requestType } from "../../lib/types";
import { useUpdateAtom } from "jotai/utils";
import { paramAtom } from "../../store/store";
import { useAtom } from "jotai";

interface CollapseListProps {
  icon: React.ReactNode;
  subIcon: React.ReactNode[];
  text: string;
  subText: string[];
  subType: Kind[] | Country[];
  children?: React.ReactNode;
  onClick?: () => void;
}

interface ItemTitleProps {
  icon: React.ReactNode;
  text: string;
  expand: boolean;
  onClick?: () => void;
}

interface SubItemProps {
  children?: React.ReactNode;
  subIcon?: React.ReactNode;
  subText?: string;
  subType: Kind | Country;
}

const ItemTitle: React.FC<ItemTitleProps> = ({
  icon,
  text,
  expand,
  onClick,
}) => {
  return (
    <>
      <ListItem button onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    </>
  );
};

const SubItem: React.FC<SubItemProps> = ({
  children,
  subIcon,
  subText,
  subType,
}) => {
  const setParam = useUpdateAtom(paramAtom);

  return (
    <ListItem
      button
      onClick={() => {
        if (subType === (Country.Korea || Country.Usa))
          setParam((prev) => ({ ...prev, country: subType }));
        else setParam((prev) => ({ ...prev, entity: subType }));
      }}
    >
      <ListItemIcon sx={{ ml: 3 }}>{subIcon}</ListItemIcon>
      <ListItemText primary={subText} />
    </ListItem>
  );
};

const CollapseList: React.FC<CollapseListProps> = ({
  icon,
  subIcon,
  text,
  subText,
  subType,
  children,
  onClick,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <ItemTitle
        icon={icon}
        text={text}
        onClick={() => setExpand(!expand)}
        expand={expand}
      />
      <Collapse in={expand} timeout="auto" unmountOnExit onClick={onClick}>
        {children ? (
          <ListItem>{children}</ListItem>
        ) : (
          subIcon.map((icon, index) => (
            <SubItem
              key={index}
              subIcon={icon}
              subText={subText[index]}
              subType={subType[index]}
            />
          ))
        )}
      </Collapse>
    </>
  );
};

export default CollapseList;
