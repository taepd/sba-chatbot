import React , {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShopInfo from './ShopInfo';
import MenuAndReviewArea from './MenuAndReviewArea';
import Navigation from '../mainPage/Navigation';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },

  bg: {
    backgroundColor: theme.palette.background.paper,
  },


}));

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


const Review = ({match}) => {

  console.log(match.params.shopid)
  const [data, setData] = useState([])
  useEffect(() => {
      alert(match.params.shopid)
      axios.get(`http://localhost:8080/shop/${match.params.shopid}`)
      .then(res=>{
          // alert(`List Success`)
          setData(res.data)
          console.log(res.data)
      })
      .catch(e=>{
          alert(`List Failure`)
          throw(e)
      })

  },[])

  console.log(data)
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Grid container justify="center" >
        {shopinfo.map((post) => (
          <ShopInfo key={post.shop_id} post={post} />
        ))}
      </Grid>
      <Grid container justify="center" spacing={5} className={useStyles.mainGrid}>
        <MenuAndReviewArea />
      </Grid>
    </React.Fragment>
  )
}

export default Review