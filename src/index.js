import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom"
import TaskCreator from "./TaskCreator";
import TasksList from "./TasksList";
import { configureStore } from '@reduxjs/toolkit';
import taskSlice from "./taskSlice";

const store= configureStore({
    reducer: {
        task: taskSlice
    }
})

ReactDOM.render(
    <Provider store={store}>
        <TaskCreator/>
        <TasksList/>
    </Provider>,
    document.getElementById("root")
);