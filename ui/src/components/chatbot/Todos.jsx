import { Class } from '@material-ui/icons';
import React, { useEffect } from 'react';

import './Todos.css';

const Todos = (props) => {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            const fiveFirstTodos = data.slice(0, 6)
        })
    }, []);
    console.log(props)
    return <div className="todos-wedget">Hello World</div>

}
export default Todos;