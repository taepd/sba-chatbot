import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import MainNavigation from '../common/MainNavigation';
import MainList from './MainList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    wd: {
        width: 1130,
        margin: "auto",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(6)
    },
    title: {
        marginBottom: theme.spacing(1),
    },
    titleb: {
        marginTop : theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    toolbarLink: {
        textDecoration: 'none',
    },
    // he:{
    //     minHeight:800,
    // }
}));



const Main = () => {
    const classes = useStyles();
    const userid = sessionStorage.getItem("sessionUser");
    const [userBasedData, setUserBasedData] = useState([])
    const [itemBasedData, setItemBasedData] = useState([])
    const [recommendShopName, setRecommendShopName] = useState([])
    const [loading, setLoading] = useState(true)


    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))

    useEffect(() => {
        if (loggedIn === null) return
        else {
            axios.get(`http://localhost:8080/main`)
                .then(res => {
                    setUserBasedData(res.data[0])
                    setItemBasedData(res.data[1])
                    setRecommendShopName(res.data[2])

                })
                .catch(e => {
                    alert(`List Failure`)
                    throw (e)
                })

        }
    }, [])
    // spinner
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);



    return (
        <React.Fragment>

            <CssBaseline />
            <MainNavigation />
            <Grid container justify="center" className={classes.he}>
            { loading ? <CircularProgress /> :
                <>
                    { loggedIn === null
                        ? '로그인하세요'
                        :
                        <>
                            <Grid container justify="center" className={classes.wd}>
                                <Grid container justify="center" direction="column" alignItems="center"  className={classes.title}>
                                    <Typography variant="h5" >
                                        {userid} 님을 위한 추천 매장
                                    </Typography>
                                   
                                </Grid>
                                {/* <Divider variant="middle" /> */}
                                <Grid container justify="center" spacing={2} >
                                    {userBasedData.map((post) => (
                                            <MainList key={post.shop_name} post={post} />
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid container justify="center" className={classes.wd}>
                                <Grid container justify="center" direction="column" alignItems="center" className={classes.titleb}>
                                    <Typography variant="h5" >
                                        [{recommendShopName}]과 함께 다른 고객 님들이 찾은 매장
                                    </Typography>
                                </Grid>
                                {/* <Divider variant="middle" /> */}
                                <Grid container justify="center" spacing={2} >
                                    {itemBasedData.map((post) => (
                                            <MainList key={post.shop_name} post={post} />
                                    ))}
                                </Grid>
                            </Grid>
                        </>
                    }
                </>
            }
            </Grid>
        </React.Fragment>
    );
}


export default Main