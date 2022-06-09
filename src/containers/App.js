import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundy from '../components/ErrorBoundry';   

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json();
        })
            .then(users => {
                this.setState({robots: users})
        });

    }


    render() {
        //destructuring
        const {robots, searchfield} = this.state;

        //filter is an array method
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        //this is an array length in JavaScript
        return !robots.length? <h1>'Loading'</h1> :  


                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <ErrorBoundy>
                            <CardList robots={ filteredRobots } />
                        </ErrorBoundy>
                    </Scroll>
                </div>
    }
    


}

export default App;