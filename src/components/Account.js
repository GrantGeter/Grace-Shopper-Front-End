import { useState } from 'react';
import EditProfileModal from './EditProfileModal';


const Account = ({ currentUser }) => {
    
    return (
        <div>
            <h3>Account Page</h3>
            {
                currentUser ? <EditProfileModal currentUser={ currentUser }/> : null
            }
        </div>
        
    )
}

export default Account;