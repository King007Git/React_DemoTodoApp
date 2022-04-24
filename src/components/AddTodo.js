import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddTodo = (props) => {


    const dateFormat = (inputDate, format) => {
        //parse the input date
        var current = new Date();
        //console.log(current.getDate()+"-"+(current.getMonth()+1)+"-"+current.getFullYear());
        const date = new Date(inputDate);
        //console.log(date);

        //extract the parts of the date
        if (current < date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            //replace the month
            format = format.replace("MM", month.toString().padStart(2, "0"));

            //replace the year
            if (format.indexOf("yyyy") > -1) {
                format = format.replace("yyyy", year.toString());
            } else if (format.indexOf("yy") > -1) {
                format = format.replace("yy", year.toString().substr(2, 2));
            }

            //replace the day
            format = format.replace("dd", day.toString().padStart(2, "0"));
            return format;
        }else{
            
            return null;
        }  
    }


    const title = useRef("");
    const deadline = useRef("");
    const submit = (e) => {
        e.preventDefault();
        if (!title.current.value || !deadline.current.value) {
            toast("Task Name or Deadline is empty", {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.ERROR,
                className: 'taskEmptyNotify-toast',
            });
        } 
        const date_deadline = dateFormat(deadline.current.value,"dd-MM-yyyy");
        if(date_deadline === null){
            toast("Deadline is incorrect", {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.ERROR,
                className: 'deadlineNotify-toast',
            });
        }else{
            props.addTask(title.current.value,date_deadline);
            title.current.value = "";
            deadline.current.value = "";
        }
    }
    return (
        <div className="container my-3">
            <h2 className="text-center">Add Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Task Name</label>
                    <input type="text" ref={title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Deadline</label>
                    <input type="date" ref={deadline} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success">Add Task</button>
            </form>
        </div>
    )
}

export default AddTodo;
