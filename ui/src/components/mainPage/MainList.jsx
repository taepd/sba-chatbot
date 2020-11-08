import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles((theme) => ({
    divroot: {
        flexGrow: 1,
        marginTop: theme.spacing(3),

    },
    root: {
        display: 'flex',
        width: 245,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        // flex: '1 0 auto',
    },
    cover: {
        width: 150,
        height: 150,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
        
      },
}));

function HalfRating() {
    const classes = useStyles();
    const [value, setValue] = React.useState(4);
    return (
        <div className={classes.root}>
            <Rating name="read-only" value={value} readOnly />
        </div>
    );
}


const MainList = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { post } = props;

    return (
        
        <div className={classes.divroot} spacing={2}>
            <Grid container justify="flex-start"  >
                <Grid>
                    <Card className={classes.root} square elevation={0} variant="outlined" >
                        <CardActionArea href="/review">
                            <CardMedia
                                className={classes.media}
                                image={'https://www.yogiyo.co.kr' + post.shop_img}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h6">
                                    {post.shop_name}
                                </Typography>
                                <Grid container direction="row">
                                    <Rating name="iconstar" defaultValue={1} max={1}/> 
                                        <Typography variant="subtitle1" color="textSecondary">
                                             {post.shop_rev_avg} /
                                        </Typography>
                                    <Rating name="iconstar" defaultValue={1} max={1}/> 
                                        <Typography variant="subtitle1" color="textSecondary">
                                            예상 {post.shop_pred_avg}
                                        </Typography>
                                </Grid>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   리뷰 {post.shop_rev_amt}
                                </Typography>
                                
                                <Typography variant="body2" color="textSecondary" component="p">
                                   대표메뉴 {post.food_name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </div >


    );
}

MainList.propTypes = {
    post: PropTypes.object,
};

export default MainList