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
        marginBottom: theme.spacing(2),
        width: "100%",
    },
    root: {
        // display: 'flex',
        width: 290,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: 150,
        height: 150,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
    },
    mrr: {
        marginRight: theme.spacing(1)
    },
    mrb: {
        marginTop: theme.spacing(2),
    },
    rating:{
        marginTop : 2,
    }
}));
const shoplistl = [
    {
        shop_name: '맛자랑24시찜닭닭도리',
        food_name: '닭볶음탕',
        price:'20000',
        food_img:'https://images.deliveryhero.io/image/yogiyo/STOCK_IMG/%ED%95%9C%EC%8B%9D/%EA%B5%AD%EB%AC%BC%EC%9A%94%EB%A6%AC-%EC%B0%8C%EA%B0%9Cn%ED%83%95%EB%A5%98/%EC%8A%A4%ED%83%81_20170912_foodon_fon12432_%EB%8B%AD%EB%8F%84%EB%A6%AC%ED%83%9503_1080x640.jpg?width=384&height=273&quality=100',
        shop_rev_avg:
            '4.5',
        pred_rev_avg:
            '4.7',
        shop_rev_amt:
            '304',
        shop_pred_avg: '4.7'

    },
]

function HalfRating() {
    const classes = useStyles();
    const [value, setValue] = React.useState(4);
    return (
        <div className={classes.root}>
            <Rating name="read-only" value={value} readOnly />
        </div>
    );
}

const ChatbotMenuSearchContents = (props) => {
    // console.log("뭐올거니"+JSON.stringify(props))
    // console.log("아악"+props)
    const classes = useStyles();
    const theme = useTheme();
    const post  = props.menu[0];
    // console.log("post "+props.menu[0].food_img)
    const userid = sessionStorage.getItem("sessionUser");
    return (

        <div className={classes.divroot}>
            <Grid container justify="flex-start" >
                <Grid>
                    <Card className={classes.root} square elevation={0} variant="outlined" >
                        <CardActionArea >
                            <CardMedia
                                className={classes.media}
                                image={post.food_img}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography variant="body2" >
                                    {post.food_name}
                                </Typography>
                                <Typography variant="body2" >
                                    {post.price}원
                                </Typography>
                                <Grid container direction="row">
                                    {/* <Typography gutterBottom variant="caption" color="textSecondary" className={classes.mrr}>
                                        {post.shop_name}
                                    </Typography> */}
                                    <Rating name="iconstar" defaultValue={1} max={1} size="small" className={classes.rating}/>
                                    <Typography variant="caption" color="textSecondary">
                                        {post.food_rev_cnt}
                                    </Typography>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Grid container justify="center" className={classes.mrb}>
                        <Typography variant="subtitle2" >
                            {userid}님의 예상 평점 {shoplistl.shop_pred_avg}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </div >


    );
}

ChatbotMenuSearchContents.propTypes = {
    post: PropTypes.object,
};

export default ChatbotMenuSearchContents