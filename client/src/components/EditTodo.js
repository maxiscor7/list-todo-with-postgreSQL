import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.description)
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setDescription(todo.description)
        setShow(false)
    };
    const handleShow = () => setShow(true);

    

    const updateDescription = async e => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
        handleClose()
    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={e => updateDescription(e)} variant="warning" >
                        Edit
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default EditTodo;