import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import {Divider, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  align:{
    marginLeft  : 'auto',
    marginRight : 'auto'
  },
  inputBase:{
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: 300
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button color="primary" >프로젝트</Button>
        {/* <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography> */}
        <div className={classes.align}>
        <InputBase className={classes.inputBase}>
        </InputBase>
        <IconButton >
          <SearchIcon />
        </IconButton>
        </div>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
            // <Link
            //   color="inherit"
            //   noWrap
            //   key={section.title}
            //   variant="body2"
            //   href={section.url}
            //   className={classes.toolbarLink}
            // >
            <Link 
              className={classes.toolbarLink}
              to={section.url}>
              {section.title}
            </Link>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Header