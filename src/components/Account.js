import { useState } from 'react';
import EditProfileModal from './EditProfileModal';


const Account = ({ currentUser }) => {
    
    return (
        
        <div id="acctPage">
            
            <div className="profile">

            </div>
            {
                localStorage.getItem("token") ? <div className="sideProfile">                                                    
                                                    <div className="signOut"></div>
                                                    <div className="editProfile"><EditProfileModal currentUser={ currentUser }/></div>
                                                    <div className="orderHistory"></div>
                                                </div> : null
            }
        </div>
        
    )
}

export default Account;