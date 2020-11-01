import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 1000,
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    inline: {
        // display: 'inline',
    },
    marginzero: {
        margin: 0,
    },

    listtext: {
       paddingRight : 100,
    },

    paddingzero:{
        padding : 0,
    },

}));

const UserDeliveryList = (props) => {
    const classes = useStyles();
    const { post } = props;
    const date = post.order_time;
    const rdate = new Date(date);
    const rday ='';
    const day =() =>{
        if (rdate.getDay() == 0) {
            return ' (일)'
        }
        else if (rdate.getDay() == 1) {
            return ' (월)'
        }
        else if (rdate.getDay() == 2) {
            return ' (화)'
        }
        else if (rdate.getDay() == 3) {
            return ' (수)'
        }
        else if (rdate.getDay() == 4) {
            return ' (목)'
        }
        else if (rdate.getDay() == 5) {
            return ' (금)'
        }
        else if (rdate.getDay() == 6) {
            return ' (토)'
        }
    }
    return (
            <Grid item xs={12}>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemText 
                            primary={post.shop_name}
                            variant="h6"
                            secondary={
                                <React.Fragment>
                                    <Typography 
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {rdate.getFullYear() + "-" + Number(rdate.getMonth()) + "-" + rdate.getDate()+" "+ rdate.getHours()+ day()}
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.listtext}>{post.food_name}</Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <Button variant="outlined" color="primary" href={"/reviewwrite/"+post.or_id} >
                                리뷰쓰기
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" variant="middle" />
                </List>
            </Grid>

    );
}

export default UserDeliveryList