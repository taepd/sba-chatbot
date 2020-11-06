import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OrderInfo from './OrderInfo'
import axios from 'axios';


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
    const [orderData, setOrderData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/order/${match.params.userid}`)
        .then(res =>{
            setOrderData(res.data)
            // console.log(res.data)
        }).catch(error=>{
            alert("안돼 돌아가")
        })
    },[])
    // console.log(orderData)
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container justify="center" className={classes.wd}>
                    <OrderInfo post={orderData}/>
            </Grid>
        </React.Fragment>

    );
}


export default Order