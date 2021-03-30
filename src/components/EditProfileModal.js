import {Modal, Button} from 'react-bootstrap';
import {React, useState} from 'react';
import EditProfile from './EditProfile';

function MyVerticallyCenteredModal({  show, onHide, finished, setFinished }) {
  return (
    <Modal
      show={ show }
      onHide={ onHide }
      finished={ finished } 
      setFinished={ setFinished }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill out the form to create an Routine!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <EditProfile finished={ finished } setFinished={ setFinished }/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const  EditProfileModal = ({ finished, setFinished }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)}>
        Edit Profile!
      </Button>

      <MyVerticallyCenteredModal
        show={ modalShow }
        onHide={() => setModalShow(false)}
        finished={ finished } 
        setFinished={ setFinished }
      />
    </>
  );
}
export default EditProfileModal;