import Form from 'react-bootstrap/Form';
export const TaskComponent = ({id, text, handleClick, selected, hightlighted, setDragId}) => {
    const dragStart = (event) => setDragId(id);
    const dragEnd = (event) => setDragId(null);
    return (
        <div className='row' draggable='true' onDragStart={dragStart} onDragEnd={dragEnd}>
            <div className='col-12'>
                <Form.Check
                    className={"task" + (hightlighted? ' hightlighted': '')}
                    type={'checkbox'}
                    id={id}
                    label={text}
                    checked={selected}
                    onChange={()=>handleClick(id)}
                    data-testid="taskId"
                />
            </div>
          </div>
    )
}