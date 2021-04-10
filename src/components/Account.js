import { useState, useEffect } from 'react';
import EditProfileModal from './EditProfileModal';
import OrderHistoryModal from './OrderHistoryModal';
import { checkUser } from '../api';
import { getToken, clearToken } from '../auth';
import { Button } from 'react-bootstrap';

const Account = ({ setIsShown, setDisplayMessage }) => {
    const [ currentUser, setCurrentUser ] = useState('');
    const [ update, setUpdate ] = useState("false");
    const user = currentUser;

    useEffect (() => {
        async function updateFunction() {
            const { data } = await checkUser(getToken());
            console.log("hello")
            setCurrentUser(data);
            setUpdate("false")
        }
        updateFunction();
    }, [update])

    return (
        
        <div id="acctPage">
            
            <div className="profile">
                <h2>Welcome { user.username }!</h2>
                <h3>Current Name on Account: { user.name}</h3>
                <h3>Current Email: { user.email }</h3>
                <h3></h3>
            </div>
            {
                <div className="sideProfile">                                                    
                    <div className="signOut"><Button onClick={ clearToken } href="/home">Sign Out</Button></div>
                    <div className="editProfile"><EditProfileModal 
                                                    user={ user } 
                                                    setIsShown={ setIsShown }
                                                    setDisplayMessage={ setDisplayMessage }
                                                    setUpdate={ setUpdate }
                                                    update={ update }
                                                    /></div>
                    <div className="orderHistory"><OrderHistoryModal 
                                                    currentUser={ user } 
                                                    // setIsShown={ setIsShown }
                                                    // setDisplayMessage={ setDisplayMessage }
                                                    /></div>
                </div>
            }
        </div>
        
    )
}

export default Account;