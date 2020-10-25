import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Link from '@material-ui/core/Link';




const useStyles = makeStyles((theme) => ({
    divroot: {
        flexGrow: 1,
        marginTop: theme.spacing(3),
        
    },
    root: {
        display: 'flex',
        width:500,
        
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    content: {
        padding: 16,
        '&:last-child': {
          paddingBottom: 0,
        },
    },
    cover: {
        width: 150,
        height:150,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    none:{
        padding:0
    },
    star:{
        marginBottom:10
    }
  
}));

function HalfRating() {
    const classes = useStyles();
    const [value, setValue] = React.useState(4);
    return (
        <div className={classes.root}>
            <Rating name="read-only" readOnly  max={1} />
        </div>
    );
}


const ShopList = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { post } = props;

    return (
        <div className={classes.divroot} spacing={2}>
            <Grid container justify="center"  >
                <Grid>
                    <CardActionArea href="/review" >
                        <Card className={classes.root} square elevation={0} variant="outlined">
                            <Grid item xs className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6" >
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
                                    <Typography variant="subtitle1" color="textSecondary">
                                        리뷰  {post.shop_rev_amt} / {post.food_name}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <CardMedia
                                className={classes.cover}
                                image={post.shop_img}
                            />
                        </Card>
                    </CardActionArea>
                </Grid>
                

            </Grid>
        </div >


    );
}

ShopList.propTypes = {
    post: PropTypes.object,
};

export default ShopList