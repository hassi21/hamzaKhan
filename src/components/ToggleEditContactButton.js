import React, { Component } from 'react';
import EditContactForm from './EditContactForm';
import Button from '@material-ui/core/Button';

class ToggleEditContactButton extends Component {

    state = {
        showEditForm: false
    };

    render() {

        const { contact } = this.props;

        return (

            <React.Fragment>
                <Button
                    variant="contained" color="primary"
                    onClick={() =>
                        this.setState({ showEditForm: !this.state.showEditForm })
                    }
                >
                edit
                </Button>

                { this.state.showEditForm && (
                    <EditContactForm
                       contactId={ contact.id }
                       name={ contact.name }
                       phone={ contact.phone }
                       email={ contact.email }
                       categories={ contact.categories }
                       updateContact={this.props.updateContact}
                    />
                ) }

            </React.Fragment>
        );
    }
}

export default ToggleEditContactButton;