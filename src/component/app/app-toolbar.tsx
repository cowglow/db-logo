import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

interface AppToolbarProps {
  onOpen: MenuToggleAction;
}

const AppToolbar: React.FC<AppToolbarProps> = ({ onOpen }) => (
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu" onClick={onOpen}>
      <SvgIcon>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </SvgIcon>
    </IconButton>
  </Toolbar>
);

export default AppToolbar;
