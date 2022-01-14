import React, { useState } from "react";
import { Collapse, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface CollapseListProps {
  icon: React.ReactNode;
  subIcon: React.ReactNode[];
  text: string;
  subText: string[];
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

const SubItem: React.FC<SubItemProps> = ({ children, subIcon, subText }) => {
  return (
    <ListItem button>
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
            <SubItem subIcon={icon} subText={subText[index]} />
          ))
        )}
      </Collapse>
    </>
  );
};

export default CollapseList;
