import React from 'react'
import classes from "./Details.css"

const details = (props) => {
    return(
        <div className={classes.elements}>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.description}>{props.description}</p>
        </div>
    )
}

export default details;