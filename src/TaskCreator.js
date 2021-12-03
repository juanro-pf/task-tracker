import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "./taskSlice";

function TaskCreator() {

    const [task, setTask] = useState('');
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(0);

    const dispatch= useDispatch();

    const handleStart= () => {
      if(timer===0) setTimer(setInterval(() =>{ setTime(prevTime => parseInt(prevTime) + 1) }, 1000));
    };

    const handleStop= () => {
      if(timer!== 0) clearInterval(timer);
      if(time!==0) dispatch(addTask([task, time]))
      setTask('');
      setTime(0);
      setTimer(0);
    };

    const handleTaskChange= ({target}) => {
      setTask(target.value);
    };

    const handleTimeChange= ({target}) => {
      setTime(target.value);
    };

    const handleFocus= () => {
      if(timer!== 0) {
        clearInterval(timer);
        setTimer(0);
      }
    };

    return (
      <div>
        <label>
          Task name
          <input
            id="taskName"
            type="text"
            name='task'
            value={task}
            onChange={handleTaskChange}
          />
        </label>
        <label>
          Time elapsed
          <input
            id="timeField"
            type="number"
            name='time'
            value={time}
            onChange={handleTimeChange}
            onFocus={handleFocus}
          />
        </label>
        <button
          type="button"
          id="start"
          onClick={handleStart}
        >START</button>
        <button
          type="button"
          id="stop"
          onClick={handleStop}
        >STOP</button>
      </div>
    )
}

export default TaskCreator;
