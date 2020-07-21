import React, { Component } from 'react';

/* Importando css */
import classes from './PageBuilder.css'
import NavigationItems from '../components/Navigation/NavigationItems/NavigationItems';
import Details from '../components/Details/Details';
import Logo from '../components/LogoPerfil/Logo';


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
            details: <Details 
                        title='Ingeniera en computacion' 
                        description='Mi nombre es Maria Jose Chavarria Bravo, tengo la edad de 23 años, soy recientemente egresada de la carrera Ingenieria en computacion,
                        soy una persona que me encanta viajar, conocer nuevas culturas, nuevas tecnologias, nuevos lenguajes, nuevas cosas, en mi tiemo libre me gusta ver series 
                        en netflix, me encanta escuchar y disfrutar la musica y lo mas primordial me gusta pasar tiempo con mi familia, mi esposo y amigos.'
                    />
             

        })
    }

    render(){
        return(

            
            <div className={classes.principalPage} >
               
                
                <div className={classes.NavigationItems}>
                   
                          <Logo />   
                        <NavigationItems />
                       
                      
                </div>

        
                   {this.state.details}
               
                                     
               
            </div>
        )
    }

};

export default PageBuilder;