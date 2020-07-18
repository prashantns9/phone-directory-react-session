import React from 'react';
import './AddContact.css';

export class AddContact extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            avatar: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        })
    }

    addContact(e) {
        e.preventDefault();
        this.props.onContactAdd(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            avatar: ''
        });
    }

    isAddEnabled() {
        return this.state.firstName && this.state.lastName && this.state.avatar && this.state.phone;
    }

    render() {
        return (
            <form className="add-contact">
                <label>
                    First Name:<input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                </label>
                <label>
                    Last Name:<input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
                </label>
                <label>
                    Phone:<input type="text" value={this.state.phone} name="phone" onChange={this.handleChange} />
                </label>
                <label>
                    Avatar URL:<input type="text" value={this.state.avatar} name="avatar" onChange={this.handleChange} />
                </label>
                <button onClick={(e) => { this.addContact(e) }} disabled={!this.isAddEnabled()}>Add </button>
            </form>
        );
    }
}

export default AddContact;
