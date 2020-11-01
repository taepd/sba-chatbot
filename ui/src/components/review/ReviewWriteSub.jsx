import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ReviewImageUpload from './ReviewImageUpload';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    // backgroundColor: theme.palette.background.paper,
    // margin:theme.spacing(0),
  },
  input: {
    display: 'none',
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  textfield: {
    marginTop: theme.spacing(1),
  },
  smallbutton: {
    marginRight: theme.spacing(1),
  },
  divider: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0),
    },
    marginRight: theme.spacing(1),
  },
  margin: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  marginzero: {
    margin: theme.spacing(0),
  },
  marginmenu: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(5),
  },

}));


const ReviewWriteSub = (props) => {
  const classes = useStyles();
  const { archives, description, social, title } = props;
  const [value, setValue] = React.useState(0);

  return (
   

      <div className={classes.root}>
         <Grid item xs={12} md={12} justify="center">
        <Grid container justify="center" item xs={12} md={12} className={classes.margin}>
          <Typography variant="h4">
            네네치킨
          </Typography>
        </Grid>
        <Grid container justify="center" item xs={12} md={12} className={classes.marginmenu}>
          <Typography color="textSecondary" variant="body2">
            순살치킨 ＋ 순살치킨/1(순살 소스선택(후라이드),순살 소스선택(간장),기본음료선택(콜라사이즈업),추가선택(무추가))
          </Typography>
        </Grid>
        <Divider variant="middle" className={classes.marginzero} />
        <Grid container justify="center" item xs={12} md={12} className={classes.margin}>
          <Typography color="textSecondary" variant="h6">
            이 음식점에 대한 상세한 평가를 해주세요.
          </Typography>
        </Grid>
        <Grid container justify="center" item xs={12} md={12} className={classes.margin}>
          <Grid container item xs={12} md={3} alignItems="center" justify="center">
            <Grid container>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  맛
              </Typography>
              </Grid>
              <Grid item>
                <Rating name="teste" defaultValue={2.5} precision={0.5} size="large" />
              </Grid>
            </Grid>

            <Grid container >
              <Grid item xs >
                <Typography gutterBottom variant="h6">
                  양
              </Typography>
              </Grid>
              <Grid item>
                <Rating name="yarng" defaultValue={2.5} precision={0.5} size="large" />
              </Grid>
            </Grid>

            <Grid container >
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  배달
              </Typography>
              </Grid>
              <Grid item>
                <Rating name="delivery" defaultValue={2.5} precision={0.5} size="large" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          {/* <ReviewImageUpload/> */}

        <Grid container>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.textfield}
              id="outlined-multiline-static"
              fullWidth
              multiline
              rows={20}
              defaultValue="리뷰를 작성해 주세요"
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid container className={classes.button} justify="flex-end">
          <Button className={classes.smallbutton} variant="contained" color="primary" disableElevation>
            등록 완료
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            등록 취소
          </Button>
        </Grid>
        </Grid >
      </div>

  );
}

ReviewWriteSub.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};

export default ReviewWriteSub