import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import EditProfile from './EditProfile';


function MyVerticallyCenteredModal({  show, onHide, currentUser, setIsShown, setDisplayMessage }) {
  
  return (
    <Modal
      show={ show }
      onHide={ onHide }
      currentUser={ currentUser }
      setIsShown={ setIsShown }
      setDisplayMessage={ setDisplayMessage }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change any field to edit your profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <EditProfile currentUser={ currentUser } setIsShown={ setIsShown } setDisplayMessage={ setDisplayMessage } show={ show } onHide={ onHide }/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const  EditProfileModal = ({ currentUser, setIsShown, setDisplayMessage }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)}>
        Edit Profile!
      </Button>

      <MyVerticallyCenteredModal
        show={ modalShow }
        onHide={() => setModalShow(false)}
        currentUser={ currentUser }
        setIsShown={ setIsShown }
        setDisplayMessage={ setDisplayMessage }
      />
    </>
  );
}
export default EditProfileModal;