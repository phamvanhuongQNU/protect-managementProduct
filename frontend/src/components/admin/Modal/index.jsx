
import Button from 'react-bootstrap/Button';
import CreateProduct from '../../../pages/admin/CreateProduct';
import Modal from 'react-bootstrap/Modal';

function Example({handleClose}) {
 

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateProduct/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;