import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuList from "./MenuList";

interface SideMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ open, setOpen }) => {
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };
  return (
    <div>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <MenuList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default SideMenu;
