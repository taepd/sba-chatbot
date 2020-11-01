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
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1000,
    padding:0,
  },
  nonepadding :{
    padding:0,
  }

}));

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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const {food, reviews} = props;

  // console.log("할당 fooood" + food)
  // console.log("할당 review" + reviews)
  

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
          {food.map((food) => (
            <ShopMenuInfo post={food}/>
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4} justify="center" >
          {reviews.filter((review) => {
            return review.food_id != 1 && review.taste_rage !=0.0 && review.quantity_rate != 0.0 && review.delivery_rate != 0.0
          }).map((review) => (
            <ReviewDescription post={review} />
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