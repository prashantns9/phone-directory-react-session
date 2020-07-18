import React from 'react';
import './Contact.css';

export class Contact extends React.Component {

    render() {
        return (
            <div className="contact">
                {/* Avatar */}
                <div className="avatar">
                    <img src={this.props.data.avatar} alt="Hello"/>
                </div>
                {/* FirstName */}
                <div className="text">
                    <label>First Name</label>
                    <h4>{this.props.data.firstName}</h4>
                </div>
                {/* LastName */}
                <div className="text">
                    <label>Last Name</label>
                    <h4>{this.props.data.lastName}</h4>
                </div>
                {/* Phone */}
                <div className="text">
                    <label>Phone</label>
                    <h4>{this.props.data.phone}</h4>
                </div>
            </div>
        );
    }
}

export default Contact;
