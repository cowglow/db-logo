import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import { ReactComponent as EditIcon } from "../../assets/create-24px.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import AppToolbar from "./app-toolbar";
import AppDrawer from "./app-drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import HocDbsLogo from "../hoc-dbs-logo/hoc-dbs-logo";

const App = () => {
  const [active, updateDrawer] = React.useState<boolean>(false);
  return (
    <Container>
      <AppBar position="fixed">
        <AppToolbar onOpen={() => updateDrawer(true)} />
        <AppDrawer open={active} onClose={() => updateDrawer(false)} />
      </AppBar>
      <Toolbar />

      <Paper elevation={3}>
        <HocDbsLogo />
      </Paper>

      <Fab color="secondary" arial-label="Edit">
        <SvgIcon>
          <EditIcon />
        </SvgIcon>
      </Fab>
    </Container>
  );
};

export default App;
