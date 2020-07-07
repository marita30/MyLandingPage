import React from 'react';
import photoPerfil from '../../assets/images/mj.png';
import classes from './Logo.css';

const logo = () => (

    <div className={classes.Logo}>
        <img className={classes.image}src={photoPerfil} alt="MJ"/>
    </div>
    
);


export default logo;