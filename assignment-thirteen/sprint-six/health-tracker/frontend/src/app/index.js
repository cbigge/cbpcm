import React, { Component } from 'react'
import { Route, withRouter } from 'react-router'
import Container from 'react-bootstrap/Container'
import NavBar from '../components/NavBar/NavBar'
import auth0Client from './Auth'
import Callback from './Callback'
import { Dashboard, ExerciseList, ExerciseInsert, NutritionList, NutritionInsert } from '../pages/pages'

import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkingSession: true,
        }
    }

    async componentDidMount() {
        if (this.props.location.pathname === '/callback') {
            this.setState({checkingSession:false})
            return
        }
        try {
            await auth0Client.silentAuth()
            this.forceUpdate()
        } catch (err) {
            if (err.error !== 'login_required') console.log(err.error)
        }
        this.setState({checkingSession:false})
    }

    render() {
	    return (
        <div>
            <NavBar />
            <Container id="main">
                <Route exact path='/callback' component={Callback} />
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/exercise/list' component={ExerciseList} />
                <Route exact path='/exercise/create' component={ExerciseInsert} />
                <Route exact path='/nutrition/list' component={NutritionList} />
                <Route exact path='/nutrition/create' component={NutritionInsert} />
            </Container>
        </div>
        );
    }
}

export default withRouter(App)
