import React, { Component } from 'react';
import ChatScreen from './components/ChatScreen.js'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {user: ''}

    this.userChangeHandler = this.userChangeHandler.bind(this);
    this.userSubmitHandler = this.userSubmitHandler.bind(this);
  }

  render() {
    //Display the main app only if user was submitted
    if(this.state.submitted){
      return(<ChatScreen user={this.state.user} />);
    }

    return (
      //Form to enter a user
      <form onSubmit = {this.userSubmitHandler}>
        <h1>Chat App</h1>
        <div>
          <input type="text" onChange={this.userChangeHandler} placeholder="Enter a user..." required/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }

  userChangeHandler(data){
    //Get the value in the form field, store it in the component's state
    this.setState({user: data.target.value});
  }

  userSubmitHandler(data){
    data.preventDefault(); //Stop the page from reloading
    this.setState({submitted: true, user: this.state.user});
  }


}

export default App;
