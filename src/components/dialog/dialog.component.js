import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const DialogComponent = ({title, body, handleCancel, handleOk, labelOk = 'OK', labelCancel = 'Cancel', visible, setVisible}) => {

    const onCancle = () => {
        if (handleCancel) {
            handleCancel();
        }
        setVisible(false);
    }
    const onOk = () => {
        if (handleOk) {
            handleOk();
        }
        setVisible(false);
    }

    return (
        <>
            <div className='backdrop' />
            <Modal show={visible} onHide={onCancle}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCancle}>
                        {labelCancel}
                    </Button>
                    <Button variant="primary" onClick={onOk}>
                        {labelOk}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
