import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OrderInfo from './OrderInfo'

const orderinfo = [
    {
        name :'홍길동',
        addr:'서울시 강남구 서초동',
        food_name :'뿌링치즈볼',
        price: '14,000',
        or_id :'1003455',
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    wd: {
        width: 1050,
        margin: "auto",
        marginTop : theme.spacing(3),
        marginBottom : theme.spacing(6)
    },
    title:{
        marginBottom: theme.spacing(1),
    }
}));

const Order = () =>{
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container justify="center" className={classes.wd}>
                {orderinfo.map((post) => (
                    <OrderInfo key={post.name} post={post}/>
                ))}
            </Grid>


        </React.Fragment>

    );
}


export default Order