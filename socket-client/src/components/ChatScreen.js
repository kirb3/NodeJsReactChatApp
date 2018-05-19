import React, { Component } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatScreen extends Component {

    socket = {};

    constructor(props){
        super(props);
        this.state ={msgList: []};
        this.sendMsg = this.sendMsg.bind(this);

        this.socket = io('http://localhost:4000', {query: `user=${props.user}`}).connect();
        this.socket.on(`serverMsg`,msg => { 
            this.newMsg(msg); //Add messages to message list upon receiving from server
        });
    }

    render(){
        return(
            <div className="chat-window">
                <h3>Simple NodeJS - React Chat App</h3>
                <Messages msgList={this.state.msgList}/>
                <ChatInput onSend={this.sendMsg}/>
            </div>
        );
    }
    //Sends message data to the server
    sendMsg(msg){ 
        //Create the message object... then emit it
        var msgObj = {user: this.props.user,msg}
        this.socket.emit('clientMsg', msgObj);
        msgObj.sender = true;
        this.newMsg(msgObj);

    }

    //Used for adding a message to the message list
    newMsg(msg){
        var msgList = this.state.msgList;
        msgList.push(msg);
        this.setState({msgList});
    }
}

ChatScreen.defaultProps ={
    user: 'Unknown'
};

export default ChatScreen;

