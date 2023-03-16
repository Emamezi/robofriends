import React, {Component} from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox";
import './App.css';
import Scroll from "./Scroll";


class App extends Component {

    constructor() {
        super();
        this.state = {  //puttting what you want the state to have
            //state is what can change and affect the app. Usually lives in the parent component
            robots:[],
            searchbox: ""
        }
       
           
    }
    onSearchChange = (event) => {
        this.setState({  //use this whenever you want to update the state
            searchbox: event.target.value
        });
    }

    componentDidMount() {
        fetch("https:/jsonplaceholder.typicode.com/users")
            .then(response => response.json()
                .then(users => this.setState({ robots: users }))
        )
     
    }

    render() {
      
        const filteredRobots = this.state.robots.filter(robot => {
           return  robot.name.toLowerCase().includes(this.state.searchbox.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else
            return (
                <div className="tc">
                    <h1  className="f1">RoboFriends </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
        
                
            );   
    }
}


export default App;