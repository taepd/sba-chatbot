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
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  divroot: {
    flexGrow: 1,
    // marginTop: theme.spacing(3),
    padding: 0

  },
  root: {
    display: 'flex',
    width: "100%",
    padding: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: "100"

  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
    paddingRight: 20,

  },
  cover: {
    width: 150,
    height: 100,
  },
  modalcover: {
    width: 444,
    height: 310,
  },
  modalsize: {
    // maxWidth:350,
    margin: 0,
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));


const ShopMenuInfo = (props) => {
  const classes = useStyles();

  const { post } = props;
  const [open, setOpen] = React.useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.divroot}>
      <Dialog className={classes.modalsize}
        maxWidth="xs"
        wrap="nowrap"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <CardMedia
          className={classes.modalcover}
          image={post.food_img !== 'no_image' ? post.food_img : 'https://lh3.googleusercontent.com/proxy/50XHf1N1XycTYoKaJNGaw9flAWko2BkLaBndKKKvC_i0oMkVsklpGMcI4embUG0b6PYnUakKsNViFiam8a59E2-0WjxeSjDazBs4gQaWUGZ4zY35ZGw4JsGfeeCsaGU66A'}
        />
        <Grid container justify="center" direction="row">
          <Typography>
            <DialogTitle id="alert-dialog-title" >{post.food_name}</DialogTitle>
          </Typography>
        </Grid>
        <DialogContent>
          <Grid container justify="space-between" direction="row">
            <DialogContentText id="alert-dialog-description">
              <Typography variant="h6">
                주문 금액
              </Typography>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="h6" color="secondary">
                가격 : {post.price}
              </Typography>
            </DialogContentText>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus href="/order">
            주문하기
          </Button>
        </DialogActions>
      </Dialog>
      <CardActionArea onClick={handleClickOpen}>
        <Grid alignItems="center">
          <Card className={classes.root} square elevation={0} >
            <Grid item xs className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="h6">
                  {post.food_name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.price} 원
                </Typography>
              </CardContent>
            </Grid>
            <CardMedia
              className={classes.cover}
              image={post.food_img !== 'no_image' ? post.food_img : 'https://lh3.googleusercontent.com/proxy/50XHf1N1XycTYoKaJNGaw9flAWko2BkLaBndKKKvC_i0oMkVsklpGMcI4embUG0b6PYnUakKsNViFiam8a59E2-0WjxeSjDazBs4gQaWUGZ4zY35ZGw4JsGfeeCsaGU66A'}
            />
          </Card>
          <Divider />
        </Grid>
      </CardActionArea>
    </div >






  );
}

ShopMenuInfo.propTypes = {
  post: PropTypes.object,
};

export default ShopMenuInfo