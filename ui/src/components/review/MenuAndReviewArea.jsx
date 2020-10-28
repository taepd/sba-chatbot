import React , {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ReviewDescription from './ReviewDescription';
import ShopMenuInfo from './ShopMenuInfo';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1000,
    padding:0,
  },
  nonepadding :{
    padding:0,
  }

}));



const shopmenu = [
  {
    food_name: '오리지널세트1fasdflksadjfsajlkdfjalskdafjaklsdjfk（오리지널피자L 1판＋치즈오븐스파게티＋콜라 1.25L）',
    food_price: '23,000',
    food_img: 'https://images.deliveryhero.io/image/yogiyo/PARTNER_FR_IMG/%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84/2020-06-30/%EC%A0%9C%ED%9C%B4FR_20200629_%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84_%ED%8F%B4%EB%8D%94%EB%B2%84%EA%B1%B0%EB%B9%84%ED%94%84%EC%84%B8%ED%8A%B8_1080x640.jpg?width=384&height=273&quality=100',

  },
  {
    food_name: '오리지널세트1',
    food_price: '23,000',
    food_img: 'https://images.deliveryhero.io/image/yogiyo/PARTNER_FR_IMG/%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84/2020-09-25/%EC%A0%9C%ED%9C%B4FR_20200924_%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84_%EB%B0%80%EB%A6%AC%ED%84%B0%EB%A6%AC%EB%B2%84%EA%B1%B0%EC%84%B8%ED%8A%B8_1080x640.jpg?width=384&height=273&quality=100',

  },
  {
    food_name: '오리지널세트1（오리지널피자L 1판＋치즈오븐스파게티＋콜라 1.25L）',
    food_price: '23,000',
    food_img: 'https://images.deliveryhero.io/image/yogiyo/PARTNER_FR_IMG/%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84/2019-05-15/%EC%A0%9C%ED%9C%B4FR_20190515_%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84_%ED%99%88%ED%8C%A8%EB%B0%80%EB%A6%AC%ED%8C%A9v2_1080x640.jpg?width=384&height=273&quality=100',

  },
  {
    food_name: '오리지널세트1（오리지널피자L 1판＋치즈오븐스파게티＋콜라 1.25L）',
    food_price: '23,000',
    food_img: 'https://images.deliveryhero.io/image/yogiyo/REST_OWN_IMG/%EC%84%9C%EC%9A%B8/%EC%84%9C%EC%9A%B8%EC%A4%91%EA%B5%AC/253070_%EB%AA%85%EB%8F%99%EB%8D%AE%EB%B0%A5%EB%8F%84%EC%8B%9C%EB%9D%BD/%EC%97%85%EC%B2%B4%EC%9E%90%EC%B2%B4_20191226_253070_%EB%AA%85%EB%8F%99%EB%8D%AE%EB%B0%A5%EB%8F%84%EC%8B%9C%EB%9D%BD_%EC%86%8C%EB%B6%88%EA%B3%A0%EB%8D%AE%EB%B0%A5%EB%8F%84%EC%8B%9C%EB%9D%BD_1080x640.jpg?width=384&height=273&quality=100',

  },
  {
    food_name: '오리지널세트1（오리지널피자L 1판＋치즈오븐스파게티＋콜라 1.25L）',
    food_price: '23,000',
    food_img: 'https://images.deliveryhero.io/image/yogiyo/STOCK_IMG/%ED%95%9C%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20170824_foodad_fad01074_%EB%AC%BC%EB%83%89%EB%A9%B401_1080x640.jpg?width=384&height=273&quality=100',

  },
  {
    food_name: '오리지널세트1（오리지널피자L 1판＋치즈오븐스파게티＋콜라 1.25L）',
    food_price: '23,000',
    food_img: 'https://images.deliveryhero.io/image/yogiyo/PARTNER_FR_IMG/%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84/2019-05-15/%EC%A0%9C%ED%9C%B4FR_20190515_%EB%A1%AF%EB%8D%B0%EB%A6%AC%EC%95%84_%ED%99%88%ED%8C%A8%EB%B0%80%EB%A6%AC%ED%8C%A9v2_1080x640.jpg?width=384&height=273&quality=100',

  },

]


const reviewdescription = [
  {
    name: 'ba**',
    review_img: 
      'https://source.unsplash.com/random',
 
    food_name: '순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))',
    review_cmnt:
      '으아아아아아 리엑트 너무 어려워 미친 화면단 어케 만들어야되냐 죽을거 같다 왜이렇게 왔다갔다해 복잡해 죽겠네 정신 없어 야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ발 으아아아아아아아아아',
  },

];


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const MenuAndReviewArea = (props) => {
  const {post} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <LinkTab label="메뉴보기"  {...a11yProps(0)} />
          <LinkTab label="리뷰보기" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {post.map((post) => (
            <ShopMenuInfo post={post}/>
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4} justify="center" >
          {reviewdescription.map((post) => (
            <ReviewDescription key={post.name} post={post} />
          ))}
        </Grid>
      </TabPanel>
    </div>
  );
}

MenuAndReviewArea.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default MenuAndReviewArea