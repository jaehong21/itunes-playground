import React, { useState } from "react";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Slider,
} from "@mui/material";
import { colors } from "@mui/material";
import {
  Album,
  ExpandLess,
  ExpandMore,
  Language,
  LibraryMusic,
  MenuBook,
  QueueMusic,
  Tv,
  Videocam,
  Web,
} from "@mui/icons-material";

interface MenuListProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MenuList: React.FC<MenuListProps> = ({ open, setOpen }) => {
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const Menu: React.FC = () => {
    type collapseType = {
      entity: boolean;
      limit: boolean;
      country: boolean;
    };

    const [collapse, setCollapse] = useState<collapseType>({
      entity: false,
      limit: false,
      country: false,
    });

    return (
      <Box sx={{ width: 270, backgroundColor: "white" }} role="presentation">
        <List>
          <ListSubheader>Settings</ListSubheader>
          <ListItem
            button
            onClick={() =>
              setCollapse({ ...collapse, entity: !collapse.entity })
            }
          >
            <ListItemIcon>
              <LibraryMusic />
            </ListItemIcon>
            <ListItemText primary="Song type" />
            {collapse.entity ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={collapse.entity}
            timeout="auto"
            unmountOnExit
            onClick={() => toggleDrawer(false)}
          >
            <ListItem button>
              <ListItemIcon>
                <QueueMusic sx={{ pl: 4 }} />
              </ListItemIcon>
              <ListItemText sx={{ pl: 2 }} primary="Song" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MenuBook sx={{ pl: 4 }} />
              </ListItemIcon>
              <ListItemText sx={{ pl: 2 }} primary="Book" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Tv sx={{ pl: 4 }} />
              </ListItemIcon>
              <ListItemText sx={{ pl: 2 }} primary="TV-Episode" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Album sx={{ pl: 4 }} />
              </ListItemIcon>
              <ListItemText sx={{ pl: 2 }} primary="Album" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Videocam sx={{ pl: 4 }} />
              </ListItemIcon>
              <ListItemText sx={{ pl: 2 }} primary="Music-Video" />
            </ListItem>
          </Collapse>
          <ListItem
            button
            onClick={() => setCollapse({ ...collapse, limit: !collapse.limit })}
          >
            <ListItemIcon>
              <Web />
            </ListItemIcon>
            <ListItemText primary="Contents per page" />
            {collapse.limit ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={collapse.limit} timeout="auto" unmountOnExit>
            <ListItem>
              <Slider
                sx={{ mx: 1, color: colors.pink[300] }}
                defaultValue={9}
                valueLabelDisplay="auto"
                step={1}
                min={3}
                max={40}
              />
            </ListItem>
          </Collapse>
          <ListItem
            button
            onClick={() =>
              setCollapse({ ...collapse, country: !collapse.country })
            }
          >
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="Location" />
            {collapse.country ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={collapse.country}
            timeout="auto"
            unmountOnExit
            onClick={() => toggleDrawer(false)}
          >
            <ListItem button sx={{ pl: 5 }}>
              <ListItemText primary="United States" />
            </ListItem>
            <ListItem button sx={{ pl: 5 }}>
              <ListItemText primary="Republic of Korea" />
            </ListItem>
          </Collapse>
        </List>
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
