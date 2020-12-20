import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface AppDrawerProps {
  open: boolean;
  onClose: MenuToggleAction;
}

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  return (
    <Drawer anchor="left" {...props}>
      <div
        role="presentation"
        onClick={props.onClose}
        onKeyDown={props.onClose}
        style={{ width: 250 }}
      >
        <List>
          <ListItem button>
            <ListItemText primary={"Menu Item 1"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Menu Item 2"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Menu Item 3"} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
