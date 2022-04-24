import React from 'react';
import {remove} from '../redux/action/action'
import { useSelector, useDispatch} from 'react-redux';

const Completed = () => {
    const state = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const completed_style = {
        color: "grey"
    }
    return (

        <center style={
            {
                minHeight: "100vh"
            }
        }>
            <h2 style={
                {
                    marginTop: "3vh"
                }
            }>Completed List</h2>
            {state.length === 0 ?
                <h4 style={
                    {   
                        color:"grey",
                        marginTop: "5vh"
                    }
                }>Completed List is empty</h4> :

                <div>{state.map((val) => {
                    return (<div className="container text-center my-3" key={val.id}>
                        <h4><strong>{val.task}</strong></h4>
                        <h5 style={completed_style}>(Completed  on   {val.completedOn})</h5>
                        {<button className="btn btn-danger btn-sm" onClick={() => dispatch(remove(val.completedOn))}>Delete</button>}
                        <hr />
                    </div>);
                })}</div>}
        </center>
    )
}

export default Completed
