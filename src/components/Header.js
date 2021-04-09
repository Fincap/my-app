import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Test App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
