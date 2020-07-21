import React from 'react';
import photoPerfil from '../../assets/images/mj.jpeg';
import classes from './Logo.css';

const logo = () => (

    <div className={classes.Logo}>

        <div className={classes.descripcion}>
            <h2> Ingenieria en Computacion</h2>
            <p> Welcome to my landing page, where you find many sections where you can know me more, enjoy it!!</p>
        </div>

        <img className={classes.image}src={photoPerfil} alt="MJ"/>
    </div>
    
);


export default logo;