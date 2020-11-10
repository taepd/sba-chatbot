import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, pink } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';

import MainNavigation from '../common/MainNavigation';
import MainList from './MainList';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight : 600,
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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    toolbarLink: {
        textDecoration: 'none',
    },
    media: {
        height: 300,
        // height: 0,
        // paddingTop: '56.25%', // 16:9

    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
        marginRight:theme.spacing(2),
        
    },
    cardroot: {
        width: 700,
    },
    margt:{
        marginTop : theme.spacing(2),
    },
    margtt:{
        marginTop : theme.spacing(1),
    },
    pad:{
        padding : 25,
    }
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
            <Grid container justify="center" alignItems="center" className={classes.root}>
                {loading ? <CircularProgress /> :
                    <>
                        {loggedIn === null
                            ?
                            <Grid container justify="center" direction="column" alignItems="center">
                                <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image="./img/main.jpg"
                                    // image="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
                                    title="Paella dish"
                                />
                                    {/* <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                <CheckIcon/>
                                            </Avatar>
                                        }
                                        title="AI 기반 개인 추천 챗봇 서비스 이용방법"
                                        subheader="2020. 11. 10"
                                    /> */}
                                    <CardContent className={classes.pad}>
                                        <Grid container direction="row" alignItems="center">
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                <CheckIcon />
                                            </Avatar>
                                            <Typography variant="h5" >
                                                AI 기반 개인 추천 챗봇 서비스 이용방법
                                            </Typography>
                                        </Grid>
                                        <Typography component="p" className={classes.margt}>
                                            정확한 추천 시스템을 위해 주문내역이 존재하는 user로 로그인 하는것을 권장합니다.
                                        </Typography>
                                        <Typography component="p" className={classes.margtt}>
                                            1. 로그인 ID 는 "user000000 - user011366" 사이의 값을 사용합니다.
                                        </Typography>
                                        <Typography component="p">
                                            2. password 는 "1004" 로 동일합니다.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            :
                            <>
                                <Grid container justify="center" className={classes.wd}>
                                    <Grid container justify="center" direction="column" alignItems="center" className={classes.title}>
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