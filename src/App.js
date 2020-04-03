import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state={
      inventory:[]
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res =>{
      this.setState({inventory:res.data});
      console.log(this.state.inventory);
    }).catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        {
          this.state.inventory && this.state.inventory.length > 0 && <Dashboard inventory={this.state.inventory}/>
        }
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
