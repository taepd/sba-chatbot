import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShopInfo from '../review/ShopInfo';
import MenuAndReviewArea from '../review/MenuAndReviewArea';
import Navigation from '../mainPage/Navigation';
import Paper from '@material-ui/core/Paper';
import ShopList from './ShopList';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // },
    wd:{
        width : 1050,
        margin:"auto"
    },
    spacing:{
        marginRight : theme.spacing(3),
    },
    pagi:{
        marginTop : theme.spacing(5)
    }
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

const shoplistl = [
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨1',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨2',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨 네네치킨 네네치킨 네네치킨 네네치킨 네네치킨 ',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨4',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨5',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨6',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨7',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨8',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },
    {
        shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
        shop_name: '네네치킨9',
        shop_rev_avg:
            '4.5',
        shop_rev_amt:
            '304',
        food_name: '뿌링치즈볼',
        shop_pred_avg : '4.7'
    },

];




const ShopMain = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Navigation />
                <Grid container  className={classes.wd} >
                        {shoplistl.map((post) => (
                            <Grid className={classes.spacing}>
                            <ShopList key={post.shop_name} post={post} />
                            </Grid>
                        ))}
                </Grid>
                <Grid container justify="center" alignItems="flex-end" className={classes.pagi}>
                    <Pagination count={10} color="primary" shape="rounded" size="large"/>
                </Grid>
        </React.Fragment>
    );
}


export default ShopMain