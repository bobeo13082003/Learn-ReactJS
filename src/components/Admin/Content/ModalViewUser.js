
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _, { update } from 'lodash'

const ModalViewUser = (props) => {
    const { show, setShow, dataUpdate } = props;
    console.log(">>> data", dataUpdate);
    const handleClose = () => {
        setShow(false)
        props.fetchListUser();
    };


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} >
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={dataUpdate.email}
                                disabled

                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">ID</label>
                            <input
                                type="text"
                                className="form-control"
                                value={dataUpdate.id}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input
                                type="text"
                                className="form-control"
                                value={dataUpdate.username}
                                disabled
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <input
                                type='text'
                                className="form-control"
                                disabled value={dataUpdate.role} >

                            </input>
                        </div>
                        {/* <div className='col-mad-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'> <FcPlus /> Upload File IMAGE</label>
                            <input
                                type='file'
                                hidden id='labelUpload'
                                onChange={(event) => handelUploadImage(event)}
                            />
                        </div> */}
                        <div className='col-md-12 img-preview'>
                            {dataUpdate.image ?
                                <img src={`data:image/jpeg;base64,${dataUpdate.image}`} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalViewUser;