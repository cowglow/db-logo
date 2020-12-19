import React from "react";
import DbsLogo from "../dsb-logo/dbs-logo";
import { colors } from "../../lib/colors";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import { ReactComponent as EditIcon } from "../../assets/create-24px.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import AppToolbar from "./app-toolbar";
import AppDrawer from "./app-drawer";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const App = () => {
  const [props, setProps] = React.useState({
    d: colors[0],
    b: colors[1],
    background: colors[3],
    border: colors[0],
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const payload = {
        d: colors[Math.floor(Math.random() * colors.length)],
        b: colors[Math.floor(Math.random() * colors.length)],
        background: colors[Math.floor(Math.random() * colors.length)],
        border: colors[Math.floor(Math.random() * colors.length)],
      };
      setProps(payload);
      // console.log(payload);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [active, updateDrawer] = React.useState(false);
  return (
    <Container>
      <AppBar position="fixed">
        <AppToolbar onOpen={() => updateDrawer(true)} />
        <AppDrawer open={active} onClose={() => updateDrawer(false)} />
      </AppBar>
      <Toolbar />

      <div
        style={{
          border: "thin solid red",
          flexGrow: 1,
          height: "100%",
        }}
      >
        <Paper elevation={3}>
          <DbsLogo
            dColor={props.d}
            bColor={props.b}
            bgColor={props.background}
            border={props.border}
          />
          <Box m={2}>
            <pre>
              <code>{JSON.stringify(props, null, 2)}</code>
            </pre>
          </Box>
          <div style={{ height: 1 }} />
        </Paper>
      </div>

      <Fab color="secondary" arial-label="Edit">
        <SvgIcon>
          <EditIcon />
        </SvgIcon>
      </Fab>
    </Container>
  );
};

export default App;
