import React from 'react'
import {addition} from '../redux/action/action';
import {useDispatch} from 'react-redux';


const Todo = (props) => {
    const dispatch = useDispatch();
    const deadline_style ={
        color: "grey"
    }
    const taskCompleteNotify = (data) => {
        let current = new Date();
        dispatch(addition({...data,
            completedOn: (current.toLocaleDateString()+"   -   "+current.toLocaleTimeString()).replace("T","  -  ")}));
        props.onDelete(data,true)
    }
    return (<>
        <div className="container text-center">
            <h4><strong>{props.data.task}</strong></h4>
            <h5 style={deadline_style}>(Deadline  {props.data.deadline})</h5>
            <button className="btn btn-success btn-sm" onClick={() => {taskCompleteNotify(props.data) }}>Complete</button>
                &nbsp;
            <button className="btn btn-danger btn-sm" onClick={() => {props.onDelete(props.data)}}>Delete</button>
            <hr />
        </div>
    </>);
}

export default Todo;
