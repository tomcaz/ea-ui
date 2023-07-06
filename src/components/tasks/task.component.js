import Form from 'react-bootstrap/Form';
export const TaskComponent = ({id, text, handleClick, selected, hightlighted}) => {
    return (
        <Form.Check
            className={"task" + (hightlighted? ' hightlighted': '')}
            type={'checkbox'}
            id={id}
            label={text}
            selected={selected}
            onChange={()=>handleClick(id)}
            data-testid="taskId"
          />
    )
}