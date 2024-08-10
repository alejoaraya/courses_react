import { StarOutlineOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 5,
      }}
    >
      <Grid item>
        <StarOutlineOutlined sx={{ color: "white", fontSize: 80 }} />
      </Grid>
      <Grid item>
        <Typography color='white' variant='h6'>
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};
