import React from "react";
import Drawer from "@material-ui/core/Drawer";

interface AppDrawerProps {
  open: boolean;
  onClose: MenuToggleAction;
}

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  return (
    <Drawer anchor="left" {...props}>
      menu goes here
    </Drawer>
  );
};

export default AppDrawer;
