import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout";

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container flexDirection={"column"} spacing={2}>
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
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography ml={1}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>

      <Grid
        container
        direction={"row"}
        mt={1}
        justifyContent={"end"}
        sx={{ gap: 1 }}
      >
        <Link component={RouterLink} to={"/auth/register"} color={"inherit"}>
          Create a account
        </Link>
      </Grid>
    </AuthLayout>
  );
};
