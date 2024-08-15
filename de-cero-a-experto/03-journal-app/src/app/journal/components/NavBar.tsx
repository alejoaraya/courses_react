import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogOutUser } from "../../../store/slice/auth/authThunks";

interface Props {
  drawerWidth: number;
}

export const NavBar = ({ drawerWidth = 240 }: Props) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(startLogOutUser());
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
          ml: { sm: `${drawerWidth}px` },
        },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          sx={{
            display: { sm: "none" },
          }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>Journal App</Typography>
          <IconButton onClick={onLogOut} color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
