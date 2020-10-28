import React , {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShopInfo from '../review/ShopInfo';
import MenuAndReviewArea from '../review/MenuAndReviewArea';
import Navigation from '../mainPage/Navigation';
import Paper from '@material-ui/core/Paper';
import ShopList from './ShopList';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    wd:{
        width : 1050,
        margin:"auto"
    },
    spacing:{
        marginRight : theme.spacing(3),
    },
    pagi:{
        marginTop : theme.spacing(5)
    }
}));


const ShopMain = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:8080/shops`)
        .then(res=>{
            // alert(`List Success`)
            setData(res.data)            
            
        })
        .catch(e=>{
            alert(`List Failure`)
            throw(e)

        })

    },[])

    console.log(data)

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Navigation />
                <Grid container  className={classes.wd} >
                        {data.map((post) => (
                            <Grid className={classes.spacing}>
                            <ShopList key={post.shop_id} post={post} />
                            </Grid>
                        ))}
                </Grid>
                <Grid container justify="center" alignItems="flex-end" className={classes.pagi}>
                    <Pagination count={10} color="primary" shape="rounded" size="large"/>
                </Grid>
        </React.Fragment>
    );
}


export default ShopMain