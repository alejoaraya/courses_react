import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  Grid,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../../store";

import { Note } from "../../../@types/types";
import { useMemo } from "react";

interface Props {
  note: Note;
}

export const SideBarItem = ({ note }: Props) => {
  const dispatch = useDispatch();

  const onActiveNote = () => {
    dispatch(setActiveNote(note));
  };

  const fixTitle = useMemo(() => {
    return note.title.length > 17
      ? note.title.substring(0, 17) + "..."
      : note.title;
  }, [note.title]);

  return (
    <ListItem onClick={onActiveNote} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={fixTitle} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
