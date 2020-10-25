import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShopInfo from './ShopInfo';
import MenuAndReviewArea from './MenuAndReviewArea';
import Navigation from '../MainPage/Navigation';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  // maxwidth:{
  //   maxWidth: 912,
  // },
  bg:{
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

const shopinfo = [
  {
    shop_img: 'https://www.yogiyo.co.kr/media/restaurant_logos/베이컨포테이토골드피자02_20131128_FoodAD_crop_200x200_I47tFRa.jpg',
    shop_name: '헐피자',
    shop_addr: '서울 성동구 용답동 81-11 1층',
    shop_rev_avg:
      '결제 신용카드, 현금',
    opentime:
      '12:00 - 00:30',
  },
];


const Review = () => 

<React.Fragment>
      <CssBaseline />
        <Navigation/>
          <Grid container justify="center" >
            {shopinfo.map((post) => (
              <ShopInfo key={post.shop_name} post={post} />
            ))}
          </Grid>
            <Grid container justify="center" spacing={5} className={useStyles.mainGrid}>
                  <MenuAndReviewArea />
            </Grid>
    </React.Fragment>

export default Review