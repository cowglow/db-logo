import React from "react";
import Paper from "@material-ui/core/Paper";
import DbsLogo from "../dsb-logo/dbs-logo";
import { colors } from "../../lib/colors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import { ReactComponent as EditIcon } from "../../assets/create-24px.svg";
import SvgIcon from "@material-ui/core/SvgIcon";

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
      console.log(payload);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      <Paper>
        <DbsLogo
          dColor={props.d}
          bColor={props.b}
          bgColor={props.background}
          border={props.border}
        />
      </Paper>
      <AppBar
        position="fixed"
        color="primary"
        style={{
          top: "auto",
          bottom: 0,
        }}
      >
        <Toolbar>
          <Fab color="secondary" arial-label="Edit">
            <SvgIcon>
              <EditIcon />
            </SvgIcon>
          </Fab>
          <div style={{ flexGrow: 1 }}></div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default App;
