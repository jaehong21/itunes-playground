import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { People } from "@mui/icons-material";

interface MenuListProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MenuList: React.FC<MenuListProps> = ({ open, setOpen }) => {
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const Menu: React.FC = () => {
    return (
      <Box
        sx={{ width: 250, backgroundColor: "white" }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="This is It" />
          </ListItem>
        </List>
        <Divider />
      </Box>
    );
  };

  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Menu />
      </Drawer>
    </div>
  );
};

export default MenuList;
