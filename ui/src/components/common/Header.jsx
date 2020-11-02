import React from 'react';
// import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// import Link from '@material-ui/core/Link';
import { Link, useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    root: {
        width: 1200,
        backgroundColor: fade(theme.palette.common.white, 0),
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,

    },
    toolbar: {
        flexWrap: 'wrap',
        width: 1200,

    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        marginLeft: theme.spacing(1),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.main[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.5),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.8),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    colorback: {
        backgroundColor: theme.palette.primary,
    },
    toolbarLink: {
        // padding: theme.spacing(1),
        flexShrink: 0,
        textDecoration: 'none',
        color: 'inherit',
        // "&:hover": {
        //     textDecoration: 'underline'
        // },

    },

}));


const Header = props => {
    const classes = useStyles();
    const userid = sessionStorage.getItem("sessionUser");
    const [value, setValue] = React.useState(0);
    const history  = useHistory()
    const logout = e => {
        alert('logout')
        e.preventDefault();
        sessionStorage.removeItem("sessionUser")
        history.push('/')
        window.location.reload()
    }   

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Grid container justify="center">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            <Link to="/main" className={classes.toolbarLink}>
                                메추리
                            </Link>
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon color="primary" />
                            </div>
                            <InputBase
                                placeholder="검색"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        { props.isAuth === null
                        ?   
                            <>                         
                            <Link to="/signUp" className={classes.toolbarLink}>
                                <Button color="primary" variant="outlined" className={classes.link}>
                                    회원가입
                                </Button>
                            </Link>
                            <Link to="/signIn" className={classes.toolbarLink}>
                                <Button color="primary" variant="outlined" className={classes.link}>
                                    로그인
                                </Button>
                            </Link>
                            </>:
                            <>
                             <Link to={"/myPage/"+userid} className={classes.toolbarLink}>
                                <Button color="primary" variant="outlined" className={classes.link}>
                                    마이페이지
                                </Button>
                             </Link>
                            <Link to="/signIn" className={classes.toolbarLink}>
                                <Button onClick={logout} color="primary" variant="outlined" className={classes.link}>
                                    로그아웃
                                </Button>
                            </Link>
                            </>
                        }
                    </Toolbar>
                </Grid>
            </AppBar>
        </React.Fragment>
    );
}

export default Header