import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Input } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './styling.css';

const initialState = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategory: ''
};

class AddContactForm extends Component {

    state = initialState;

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.setState(initialState);
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

    render() {

        const inputSize = 30;
        const { contactName, contactPhone, contactEmail, contactCategory } = this.state;
        return (
            <React.Fragment>
                <strong>Contact Form:</strong>
                <form onSubmit={ this.handleSubmit }>
                    <Input
                        name='contactName'
                        size={ inputSize }
                        placeholder='Enter name'
                        value={ contactName }
                        onChange = { this.handleChange }
                    /><br/>
                    <Input
                        name='contactPhone'
                        size={ inputSize }
                        placeholder='Enter phone number'
                        value = { contactPhone }
                        onChange = { this.handleChange }
                    /><br/>
                    <Input
                        name='contactEmail'
                        size={ inputSize }
                        placeholder='Enter email'
                        value = { contactEmail }
                        onChange = { this.handleChange }
                    /><br/>
                    <Input
                        name='contactCategory'
                        size={ inputSize }
                        placeholder='Enter category (sep. by coma)'
                        value = { contactCategory }
                        onChange = { this.handleChange }
                    /><br/>
                    <Button variant="contained" color="primary">Add contact</Button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(

    state => ({
        contacts: state.contacts
    }),

    dispatch => ({
        addContact: ({ contactName, contactPhone, contactEmail, contactCategory }) =>
            dispatch({
                type: 'ADD_CONTACT',
                contactName,
                contactPhone,
                contactEmail,
                contactCategory
            })
    })
)(AddContactForm);
