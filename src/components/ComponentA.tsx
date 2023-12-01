// ComponentA.tsx

import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Tasks.css'

const ComponentA: React.FC = () => {


  const navigate = useNavigate();

  const dataToSend = 'This is the data to be passed';

  const handleClick = () => {
    navigate(`/componentB/${dataToSend}`, { state: { data: dataToSend } });
  };

  const [todo, setTodo] = useState([
    { id: 1, text: 'Learn React', status: false },
    { id: 2, text: 'Build a project', status: false },
    { id: 3, text: 'Practice TypeScript', status: false }
  ])

  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  //add new tasks
  const addTask = () => {
    if(newTask) {
      let new_taskId = todo.length + 1
      let newTaskEntry =  {id: new_taskId, text: newTask, status: false}
      setTodo([...todo, newTaskEntry])
      setNewTask('')
    }

  }
  //add new tasks
  const deleteTask = (id:number) => {
    //delete a task and return the task ids tht do not match  the dleted task id, so it will return the rest of the array
    let newTasks = todo.filter( task => task.id !== id)
    setTodo([...newTasks])

  }

  //add new tasks
  const markTaskDone = () => {

  }

  //add new tasks
  const cancelUpdate = () => {

  }

  //add new tasks
  const changeTask = () => {

  }

  //add new tasks
  const updateTask = () => {

  }






  return (
    <div>
      {/* <h1>Component A</h1> */}
      {/* Using Link */}
      {/* <Link to={`/componentB/${encodeURIComponent(dataToSend)}`}>
        Go to Component B
      </Link> */}


      <h1>Component A</h1>
      <button onClick={handleClick}>Go to Component B</button>


      <div className="container App">


         {/* {update tasks} */}
         <div className="row">
        <div className="col">
          <input 
            value={ updateData && updateData }
            onChange={ (e) => changeTask()}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg btn-success mr-20"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>
      <br />





      {/* {Add new tasks} */}
      <div className="row">
        <div className="col">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />




        {
          todo && todo.length ? '' : 'No Tasks Available'
        }


        {
          todo && todo.map((task, index) => {
            return (
              <div key={task.id}>


                <div className='col taskBg'>
                  <div className={task.status ? 'done' : ''}>
                    <span className='taskNumber'>{index + 1}</span>
                    <span className='taskText'>{task.text}</span>

                  </div>

                  <div className="iconsWrap">
                    <span >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span >
                      <FontAwesomeIcon icon={faPen} />
                    </span>

                    {/* onclick, we shall get the id of the task, which will be used to delete that task */}
                    <span onClick={() => deleteTask(task.id)}> 

                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>

                  </div>

                </div>
              </div>
            )
          })
        }

      </div>


    </div>
  );
};

export default ComponentA;
