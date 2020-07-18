import React from 'react';
import './Directory.css';
import Contact from '../contact/Contact';
import AddContact from '../add-contact/AddContact';


export class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: JSON.parse(localStorage.getItem('contactsData')) || [],
            filterText: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    addContact(data) {
        const newContacts = [...this.state.contacts];
        newContacts.push(data);
        this.setState({
            contacts: newContacts
        });
    }

    renderContacts() {
        if (this.state.contacts.length) {
            const contactElements = [];
            this.state.contacts
                .filter(contact => {
                    return (contact.firstName.toLowerCase().includes(this.state.filterText.toLowerCase())
                        || contact.lastName.toLowerCase().includes(this.state.filterText.toLowerCase()));
                })
                .forEach((contact, i) => {
                    contactElements.push(<Contact key={i} data={contact} />);
                });
            return contactElements;
        } else {
            return null;
        }

    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        })
    }
    render() {
        localStorage.removeItem('contactsData');
        localStorage.setItem('contactsData', JSON.stringify(this.state.contacts));
        return (
            <div className="directory">
                <div className="header">
                    <h1>Phone Directory</h1>
                </div>
                <div className="filter">
                    <label>
                        Filter:<input type="text" value={this.state.filterText} name="filterText" onChange={this.handleChange} />
                    </label>
                </div>
                <div className="contacts">
                    {this.renderContacts()}
                </div>
                <div className="add-contact">
                    <AddContact onContactAdd={(data) => { this.addContact(data) }} />
                </div>
            </div>
        );
    }
}

export default Directory;
