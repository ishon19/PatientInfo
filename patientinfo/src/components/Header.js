import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
