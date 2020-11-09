import React, { useEffect, useState } from 'react'
import { MemoryRouter, Route } from 'react-router';
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Navigation from '../common/Navigation';
// import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem'
import Pagination from "@material-ui/lab/Pagination";

import ShopList from './ShopList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    wd: {
        width: 1050,
        margin: "auto"
    },
    spacing: {
        marginRight: theme.spacing(3),
    },
    pagi: {
        marginTop: theme.spacing(5)
    }
}));


const ShopMain = ({ match }) => {
    
    const classes = useStyles();
    const [data, setData] = useState([])
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(10);
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const post = data;
    const catif = match.params.cat_id;
    const noncaturl = `http://localhost:8080/shops`;
    const caturl = `http://localhost:8080/shops/${match.params.cat_id}`;

    
    useEffect(() => {
        axios.get((() => {
            if (catif == '전체보기') {
                return noncaturl
            } else {
                return caturl
            }
        })())
        .then(res => {
            setData(res.data)
        })
        .catch(e => {
            alert(`List Failure`)
            throw (e)
        })
        
    }, [catif])
    
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(1);
    const noOfPages =  Math.ceil(post.length / itemsPerPage) /*Math.ceil 소수점 이하를 올림 한다. */
    
    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <React.Fragment>
            <CssBaseline />
            <Navigation />
            <Grid container className={classes.wd} >
                {post.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((post) => (
                        <Grid className={classes.spacing}>
                            <ShopList post={post} />
                        </Grid>
                    ))}
            </Grid>
            <Grid container justify="center" alignItems="flex-end" className={classes.pagi}>
                <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={handleChange}
                    defaultPage={2}
                    color="primary"
                    showFirstButton
                    showLastButton
                    shape="rounded"
                />
            </Grid>
        </React.Fragment>
    );
}


export default ShopMain