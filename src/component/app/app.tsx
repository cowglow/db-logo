import React from "react";
import styles from "./app.module.css";
import HocDbsLogo from "../hoc-dbs-logo/hoc-dbs-logo";

const App = () => (
  <React.Fragment>
    <div className={styles.root}>
      <HocDbsLogo />
    </div>
  </React.Fragment>
);

export default App;
