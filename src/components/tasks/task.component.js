import Form from 'react-bootstrap/Form';
export const TaskComponent = ({id, text, handleClick, checked, hightlighted}) => {
    return (
        <Form.Check
            className={"task" + (hightlighted? ' hightlighted': '')}
            type={'checkbox'}
            id={id}
            label={text}
            checked={checked}
            onChange={()=>handleClick(id)}
            data-testid="taskId"
          />
    )
}