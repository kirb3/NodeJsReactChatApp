import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {

    render(){
        //Map the message component to each of the messages in the state
        const msgList = this.props.msgList.map((msg, i) => {
            return(
                <Message 
                    key={i}
                    user={msg.user}
                    msg={msg.msg}
                    sender={msg.sender}
                />
            );
        });

        return (
            <div className='msgList'>
                {msgList}
            </div>
        );
    }
}

Messages.defaultProps = {
    msgList: []
};

export default Messages;