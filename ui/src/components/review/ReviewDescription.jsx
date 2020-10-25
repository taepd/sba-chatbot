import React from 'react';
import PropTypes from 'prop-types';
import ReviewImage from './ReviewImage';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 150,
    height: 150,
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

});



function HalfRating() {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);
  return (
    <div className={classes.root}>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
}


const ReviewDescription = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12}>
      <Grid item md={12} className={classes.shopMain}>
        <Grid className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h6" variant="h6">
                {post.name}
              </Typography>
              <HalfRating />
              <Typography variant="subtitle1" color="textSecondary">
                {post.food_name}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.review_cmnt}
              </Typography>
              <Hidden xsDown>
                <GridList cellHeight={200} className={classes.gridList} cols={post.review_img.length}>
                  {post.map((tile) => (
                    <GridListTile key={tile.review_img} cols={tile.cols || 1}>
                      <img src={tile.review_img}/>
                    </GridListTile>
                  ))}
                </GridList>
              </Hidden>
            </CardContent>
          </div>
        </Grid>
      </Grid>
      <Divider variant="middle" />
    </Grid>


  );
}

ReviewDescription.propTypes = {
  post: PropTypes.object,
};

export default ReviewDescription