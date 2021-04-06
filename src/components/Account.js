import { useState, useEffect } from 'react';
import EditProfileModal from './EditProfileModal';
import { checkUser } from '../api';
import { getToken } from '../auth';

const Account = ({ currentUser, setCurrentUser, setIsShown, setDisplayMessage }) => {
    
    useEffect (() => {
        async function checkUserFunction() {
            const { data } = await checkUser(getToken());
            setCurrentUser(data);
        }
        checkUserFunction();
    }, [currentUser])

    return (
        
        <div id="acctPage">
            
            <div className="profile">
                <h2>Welcome { currentUser.username }!</h2>
                <h3>Current Name on Account: { currentUser.name}</h3>
                <h3>Current Email: { currentUser.email }</h3>
                <h3></h3>
            </div>
            {
                localStorage.getItem("token") ? <div className="sideProfile">                                                    
                                                    <div className="signOut"></div>
                                                    <div className="editProfile"><EditProfileModal 
                                                                                    currentUser={ currentUser } 
                                                                                    setIsShown={ setIsShown }
                                                                                    setDisplayMessage={ setDisplayMessage }
                                                                                    /></div>
                                                    <div className="orderHistory"></div>
                                                </div> : null
            }
        </div>
        
    )
}

export default Account;