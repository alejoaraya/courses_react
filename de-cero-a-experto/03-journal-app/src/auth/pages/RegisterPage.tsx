import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout";

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container flexDirection={"column"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              label={"Full name"}
              placeholder='Enter your name'
              type='text'
              name='name'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              label={"Email"}
              placeholder='Enter your email'
              type='email'
              name='email'
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant='outlined'
              label={"Password"}
              placeholder='Enter your password'
              name='password'
              type='password'
              fullWidth
            />
          </Grid>

          <Grid item>
            <Grid
              container
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>

      <Grid
        container
        alignContent={"center"}
        direction={"row"}
        justifyContent={"end"}
        sx={{ gap: 1 }}
        mt={1}
      >
        <Typography>Do you have a account?</Typography>
        <Link component={RouterLink} to={"/auth/login"} color={"inherit"}>
          Login
        </Link>
      </Grid>
    </AuthLayout>
  );
};
