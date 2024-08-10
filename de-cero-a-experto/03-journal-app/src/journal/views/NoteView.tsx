import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { StandardImageList } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={1}
      gap={3}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          9 de Agosto, 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container gap={2}>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Enter a title'
          label='Title'
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='What have happend today?'
          minRows={5}
        />
      </Grid>
      <StandardImageList />
    </Grid>
  );
};
