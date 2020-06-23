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
    };


    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setView(nextProps.location.pathname)
    };


    setView = (pathname) => {
        switch (pathname) {
            case('/'):
                this.setState({
                    details: <Details title='home'/>
                })
                break;
            case('/about-me'):
                this.onAboutMe()
                break;
            case('/experience'):
                this.setState({
                    details: <Details title='hello'/>
                })
                break;
            case('/my-hobbies'):
                this.setState({
                    details: <Details title='Music'/>
                })
                break;
            case('/my-family'):
                this.setState({
                    details: <Details title='loca'/>
                })
                break;
            default:
               this.state.details = null;
            
        }
    }

    onAboutMe = () => {
        this.setState({
            details: <Details title='Maria'/>
        })
    }

    render(){
        return(
            
            <div className={classes.somepagewrapper}>
                    
                <div>
                     <nav>
                        < NavigationItems />
                    </nav>
                </div>
            
                 <div>
                    {this.state.details}
                </div>
                                     
               
                </div>
        )
    }

};

export default PageBuilder;