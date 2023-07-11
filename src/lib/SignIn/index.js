import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CustomModal from '../CustomModal';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '50vh',
    width: '80%',
    margin: 'auto',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide({ firstLabel, handleClick, validation }) {
  const classes = useStyles();
  const [forgotPasswordModal, setModalForgotPassword] = useState(false);
  const [signupModal, setModalSignup] = useState(false);
  const onLoginSubmit = (e) => {
    e.preventDefault();

    //const email = e.target.email.value;
    //const password = e.target.password.value;

    if (validation === 'true') {
      handleClick();
    }
  };
  const handleCloseForgotPassword = () => setModalForgotPassword(false);
  const handleCloseSignup = () => setModalSignup(false);
  const handleForgotPassword = (e) => {
    setModalForgotPassword(true);
  };

  const handleSignUp = (e) => {
    setModalSignup(true);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CustomModal
        isOpen={forgotPasswordModal}
        size="md"
        leftBtnText="Cancel"
        rightBtnText="Submit"
        handleSuccess={handleCloseForgotPassword}
        handleClose={handleCloseForgotPassword}
        title="Forgot Password">
        <p>Please enter your email address here to get forgot password link</p>
        <form>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
          />
        </form>
      </CustomModal>
      <CustomModal
        isOpen={signupModal}
        size="md"
        leftBtnText="Cancel"
        rightBtnText="Submit"
        handleSuccess={handleCloseSignup}
        handleClose={handleCloseSignup}
        data-testid="CustomModel"
        title="SignUp">
        <p>Please enter your email address here to SignUp</p>
        <form>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
          />
        </form>
      </CustomModal>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={onLoginSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={firstLabel ? firstLabel : 'Email Address'}
              name="email"
              autoComplete="email"
              autoFocus
              data-testid="text-email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              data-testid="text-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <FormControlLabel
              control={<Checkbox value="agree" color="primary" />}
              label="Agree"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              data-testid="button_click">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2" onClick={handleForgotPassword}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" onClick={handleSignUp}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
