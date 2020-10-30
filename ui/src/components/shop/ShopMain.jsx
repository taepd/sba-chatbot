import React, { useEffect, useState } from 'react'
import { MemoryRouter, Route } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Navigation from '../common/Navigation';
import ShopList from './ShopList';
// import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem'
import axios from 'axios'
import Paginate from './Paginate'

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


const ShopMain = ({match}) => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // const cat = catif == 'none' ? noncaturl : caturl
    const catif = match.params.cat_id;
    const noncaturl = `http://localhost:8080/shops`;
    const caturl = `http://localhost:8080/shops/${match.params.cat_id}`;


    useEffect(() => {
        axios.get((() => {
            if(catif =='전체보기'){
                return noncaturl
            }else{
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

        // console.log(data)

        const classes = useStyles();

        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container className={classes.wd} >
                    {currentPosts.map((post) => (
                        <Grid className={classes.spacing}>
                            <ShopList post={post} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container justify="center" alignItems="flex-end" className={classes.pagi}>
                    <Paginate page={currentPosts} postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} first={indexOfFirstPost}/>
                </Grid>
            </React.Fragment>
        );
    }


    export default ShopMain