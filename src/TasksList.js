import React from "react";
import { useSelector } from 'react-redux';

function TasksList() {

    const state = useSelector(state => state.task);

    let newArr= [];
    let namesArr= [];
    const fixArray= () => {
        for(let i in state){
            console.log(newArr);
            if(!namesArr.includes(state[i][0])){
                newArr.push([parseInt(i) + 1, state[i][0], state[i][1]])
            } else{
                console.log(namesArr)
                console.log(namesArr.indexOf(state[i][0]))
                newArr[namesArr.indexOf(state[i][0])][2]= newArr[namesArr.indexOf(state[i][0])][2] + parseInt(state[i][1]);
            }
            if(!namesArr.includes(state[i][0])) namesArr.push(state[i][0]);
        }
        newArr= newArr.slice(0).reverse();
    };
    fixArray();

    return (
        <div>
            <p id="total">{state.length}</p>
            <ul>
                {
                    newArr.map(el =>                 
                        <li className="task" key={`li${el[0]}`}>
                            <span className="id" key={`id${el[0]}`}>{el[0]}</span>
                            <span className="name" key={`name${el[0]}`}>{el[1]}</span>
                            <span className="time" key={`time${el[0]}`}>{el[2]}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TasksList;