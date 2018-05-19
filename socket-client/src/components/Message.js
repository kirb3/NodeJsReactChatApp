import React, { Component } from 'react';

class Message extends Component {

    render(){
        const sender = this.props.sender ? 'me' : 'them';
        return(
            <div className={`msg ${sender}`}>
                <div className='user'>
                    {this.props.user}
                </div>
                <div className='msg-txt'>
                    {this.props.msg}
                </div>
            </div>
        );
    }
}

Message.defaultProps = {

};


export default Message;

