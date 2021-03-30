import {React, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import EditProfileModal from './EditProfileModal';


const Account = () => {

    return (
        <div>
            <h3>Account Page</h3>
            <EditProfileModal />
        </div>
        
    )
}

export default Account;