import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Usernav from './Usernav';
import NewHeader from '../NewHeader';
import Navigation from '../Navigation';



const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(0),
        backgroundColor: theme.palette.background.paper,
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





const UserPage = () => {
const classes = useStyles();

  return(
    <React.Fragment>
        <CssBaseline />
        <Header title="Blog" sections={sections} />
            <NewHeader/>
        <Grid container justify="center"className={classes.mainGrid}>
            <Usernav/>
        </Grid>

        <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  )
}
export default UserPage