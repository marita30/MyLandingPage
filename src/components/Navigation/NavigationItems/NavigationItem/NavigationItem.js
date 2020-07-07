import React from 'react';
import classes from './NavigationItem.css';

import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                className={classes.NavLink}
                to={props.link} /* viene del archivo NavigationItems.js */
                exact={props.exact}
                activeClassName={classes.active}> { /* viene del archivo NavigationItems.js */ }
                {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem;