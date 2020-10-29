import React, { useEffect, useState } from 'react'
import { MemoryRouter, Route } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Navigation from '../mainPage/Navigation';
import ShopList from './ShopList';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const Paginate = ({ postsPerPage, totalPosts, paginate,first }) => {
  const pageNumber = [];
  const history = useHistory()
  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  

  return (
    <ul className="pagination">
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          className="pagination_item"
          onClick={() => {
            paginate(pageNum)
            history.push("/shops/"+ pageNum)
          }
         }
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default Paginate;