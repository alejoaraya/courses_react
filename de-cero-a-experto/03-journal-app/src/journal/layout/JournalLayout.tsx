import { Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import { NavBar, SideBar } from "../components";

interface Props {
  children: ReactNode;
}

const drawerWidth: number = 280;

export const JournalLayout = ({ children }: Props) => {
  return (
    <Box display={"flex"}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component={"main"} flexGrow={1} p={3}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
