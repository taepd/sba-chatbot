import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ReviewWriteSub from './ReviewWriteSub';
import Navigation from '../mainPage/Navigation';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },

}));


const ReviewWritePage = () =>

  <React.Fragment>
    <CssBaseline />
    <Grid container justify="center" spacing={5} className={useStyles.mainGrid}>
      <ReviewWriteSub />
    </Grid>
  </React.Fragment>

export default ReviewWritePage