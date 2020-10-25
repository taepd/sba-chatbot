import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ReviewWriteSub from './ReviewWriteSub';
import NewHeader from '../NewHeader';
import Navigation from '../Navigation';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  
}));

const sections = [
  { title: '메인', url: '/main' },
  { title: '리뷰보기', url: '/review' },
  { title: '리뷰쓰기', url: '/reviewwrite' },
  { title: '마이페이지', url: '/userpage' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];



 const ReviewWritePage = () => 

<React.Fragment>
      <CssBaseline />
        <Header title="Blog" sections={sections} />
        <NewHeader/>
          <Grid container justify="center" spacing={5} className={useStyles.mainGrid}>
            <ReviewWriteSub/>
          </Grid>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>

export default ReviewWritePage