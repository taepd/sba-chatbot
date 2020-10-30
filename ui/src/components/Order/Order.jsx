import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OrderInfo from './OrderInfo'
import axios from 'axios';

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

const Order = ({match}) =>{
    const [foodData, setFoodData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/order/${match.params.food_id}`)
        .then(res =>{
            setFoodData(res.data)
        }).catch(error=>{
            alert("안돼 돌아가")
        })
    },[])

    console.log(foodData)
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container justify="center" className={classes.wd}>
                    <OrderInfo post={foodData}/>
            </Grid>


        </React.Fragment>

    );
}


export default Order