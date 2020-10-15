import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const tileData = [
    {
        img: 'https://source.unsplash.com/random',
        title:'하',
        author: 'author',
        featured: true,
       
    },
    {
        img: 'https://source.unsplash.com/random',
        title:'하',
        author: 'author',
      featured: true,
    },
    {
        img: 'https://source.unsplash.com/random',
        title:'하',
        author: 'author',
      featured: true,
    },


]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  img:{
      width:'100%'
  },
  GridListTile:{

  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ReviewImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={tileData.length}>
        {tileData.map((tile) => (
            <GridListTile className={classes.GridListTile} key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title}/>
            </GridListTile>
        ))}
        </GridList>
    </div>
  );
}