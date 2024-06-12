import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalResult = (props) => {
    const { show, setShow, dataModalResult } = props;

    const handleClose = () => setShow(false);

    console.log("check data Modal", dataModalResult)

    return (
        <>
            <Modal
                show={show}
                backdrop='static'
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Total Questions: {dataModalResult.countTotal}</div>
                    <div>Total Correct Answer: {dataModalResult.countCorrect}</div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Show Answers
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;