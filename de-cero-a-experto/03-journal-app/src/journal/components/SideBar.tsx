import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  drawerWidth: number;
}

export const SideBar = ({ drawerWidth }: Props) => {
  return (
    <Box flexShrink={{ sm: 0 }} component={"nav"} width={{ sm: drawerWidth }}>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component={"div"}>
            Araya Alejo
          </Typography>
        </Toolbar>

        <List>
          {["January", "February", "March", "April"].map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={item} />
                  <ListItemText
                    secondary={
                      "Irure Lorem excepteur ea Lorem proident et culpa."
                    }
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
