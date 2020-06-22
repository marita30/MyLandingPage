import React, { Component } from 'react';

/* Importando css */
import classes from './PageBuilder.css'
import NavigationItems from '../components/Navigation/NavigationItems/NavigationItems';
import Details from '../components/Details/Details'
class PageBuilder extends Component {
    state = {
        details: null
    }

    componentDidMount() {
        this.setView(this.props.location.pathname)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setView(nextProps.location.pathname)
    }

    setView = (pathname) => {
        switch (pathname) {
            case('/'):
                this.setState({
                    details: <Details title='home'/>
                })
                break;
            case('/about-me'):
                this.setState({
                    details: <Details title='MJ'/>
                })
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div className={classes.PageBuilder}>
                
                <nav>
                     < NavigationItems />
                </nav>
                {this.state.details}
               
       
                
            </div>
        )
    }

};

export default PageBuilder;