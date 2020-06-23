import React from 'react';
import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={classes.NavigationItems}> 
        <NavigationItem link="/" exact>Home </NavigationItem>
        <NavigationItem link="/about-me">About Me</NavigationItem>
        <NavigationItem link="/experience"> Experience </NavigationItem>
        <NavigationItem link="/my-hobbies"> My Hobbies </NavigationItem>
        <NavigationItem link="/my-family"> My Family </NavigationItem> 
       
    </ul>

)

export default navigationItems;