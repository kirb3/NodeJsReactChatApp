import React, { Component } from 'react';

class ChatInput extends Component {

    constructor (props){
        super(props);
        //Set initial state
        this.state = {chatInput: ''};

        this.submitted = this.submitted.bind(this);
        this.textChanged = this.textChanged.bind(this);
    }

    render(){

        return(
            <form className="inputBox" onSubmit={this.submitted}>
                <input 
                    type="text"
                    onChange={this.textChanged}
                    value={this.state.chatInput}
                    placeholder="Type message here"
                    required 
                />
            </form>
        );
    }

    textChanged(data){
        this.setState({ chatInput: data.target.value });
    }

    submitted(data){
        //Stop the form from refreshing the page on submit
        data.preventDefault();
        //Call the onSend callback and clear input
        this.props.onSend(this.state.chatInput);
        this.setState({chatInput: ''});
    }

}

ChatInput.defaultProps ={

};

export default ChatInput;
