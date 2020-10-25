import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Usernav from './Usernav';
import Navigation from '../MainPage/Navigation';



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
        <Grid container justify="center"className={classes.mainGrid}>
            <Usernav/>
        </Grid>
    </React.Fragment>
  )
}
export default UserPage