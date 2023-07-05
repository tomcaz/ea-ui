import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './add-task.styles.css';


export const AddTaskComponent = ({handleAdd}) => {
    const [value, setValue] = useState("");
    const [hasError, setHasError] = useState(false);

    const onSubmit = (event) => {
        if (value === '') {
            if (hasError === true) { // click again when error is already occur, would like to shake ui again.
                setHasError(false);
                setTimeout(()=> setHasError(true),500);
            } else {
                setHasError(true);
            }
        } else {
            setHasError(false);
            handleAdd(value);
            setValue("");
        }
    }
    return (        
        <InputGroup className={"mb-3 "+(hasError? 'error': '')} data-testid="addComponentDiv">
            <Form.Control
                aria-label="New Task"
                placeholder='Add Task'
                aria-describedby="input-add-task"
                required
                value={value}
                onChange={e=> setValue(e.target.value)}
            />
            <Button variant="outline-secondary" id="input-add-task" type='button' onClick={onSubmit}>
                Add
            </Button>
        </InputGroup>
    );
}