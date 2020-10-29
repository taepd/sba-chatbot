import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { ThemeProvider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    width: 980,
    flex: 1,
    // padding : 20,
  },
  shopMain: {
    marginBottom: 0,
    marginTop: 0,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {

    },
  },
  marginzero: {
    margin: 0,
  },
  marginbottom: {
    // marginBottom: theme.spacing(1),
  },

}));


const ReviewDescription = (props) => {
  const classes = useStyles();
  const { post } = props;
  const taste = post.taste_rate;
  const quan = post.quantity_rate;
  const deli = post.delivery_rate;

  function HalfRating() {
    const classes = useStyles();
    const rateavg = (taste + quan + deli) / 3
    console.log("sadklfjalfdj" + rateavg)
    return (
      <div className={classes.marginbottom}>
        <Rating name="rating" defaultValue={rateavg} max={5}  precision={0.5} readOnly />
      </div>
    );
  }

  return (
    // <Grid item md={12} className={classes.shopMain}>
    <div className={classes.cardDetails}>
      <CardContent className={classes.cardDetails}>
        <Typography component="h6" variant="h6">
          {post.userid}
        </Typography>
        <Grid container direction="row">
          {/* <Rating name="avg" defaultValue={(post.taste_rate *post.quantity_rate* post.delivery_rate)/3} max={5}  readOnly/> */}
          <HalfRating />
        </Grid>
        <Typography variant="subtitle1" color="textSecondary">
          {post.food_name}
        </Typography>
        <Typography variant="subtitle1" paragraph className={classes.marginzero}>
          {post.review_cmnt}
        </Typography>
        <Typography variant="subtitle1" >
          {post.review_time}
        </Typography>
      </CardContent>
      <Divider variant="middle"className={classes.marginzero} />
    </div>
    // </Grid>


  );
}

ReviewDescription.propTypes = {
  post: PropTypes.object,
};

export default ReviewDescription