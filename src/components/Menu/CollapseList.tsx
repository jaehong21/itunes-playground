import React, { useState } from "react";
import { Collapse, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface ItemTitleProps {
  icon: React.ReactNode;
  text: string;
  expand: boolean;
  toggleCollapse: () => void;
}

interface SubItemProps {
  children?: React.ReactNode;
  subIcon?: React.ReactNode;
  subText?: string;
  onClick?: () => void;
}

interface CollapseListProps {
  icon: React.ReactNode;
  subIcon: React.ReactNode[];
  text: string;
  subText: string[];
  children?: React.ReactNode;
  toggleDrawer?: () => void;
  onClick: { (): void }[];
}

const ItemTitle: React.FC<ItemTitleProps> = ({
  icon,
  text,
  expand,
  toggleCollapse,
}) => {
  return (
    <>
      <ListItem button onClick={toggleCollapse}>
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
  onClick,
}) => {
  return (
    <ListItem button onClick={onClick}>
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
  toggleDrawer,
  onClick,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <ItemTitle
        icon={icon}
        text={text}
        toggleCollapse={() => setExpand(!expand)}
        expand={expand}
      />
      <Collapse in={expand} timeout="auto" unmountOnExit onClick={toggleDrawer}>
        {children ? (
          <ListItem>{children}</ListItem>
        ) : (
          subIcon.map((icon, index) => (
            <SubItem
              key={index}
              subIcon={icon}
              subText={subText[index]}
              onClick={onClick[index]}
            />
          ))
        )}
      </Collapse>
    </>
  );
};

export default CollapseList;
