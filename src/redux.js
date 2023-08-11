import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers:{
        addTask: (state, action)=>{
            // action: {type: "todo/addTask" et payload="jouer au football"}
            const newTask = {
                id: Math.floor(Math.random()*1000),
                done: false,
                text: action.payload
            }
            state.push(newTask)
        },
        toggleTask: (state, action)=>{
            // action : {type: "todo/toggleTask" et payload: 10}
            const task = state.find(element=> element.id === action.payload)
            task.done = !task.done
        },
        deleteTask: (state, action)=>{
            //action : {type:"todo/deleteTask" et payload: 10}
            return state = state.filter(element => element.id !== action.payload)
        }
    }    
})


export const {addTask, toggleTask, deleteTask} = todoSlice.actions




const courseSlice = createSlice({
    name: "course",
    initialState:[
        { id: 1, text: "Algorithme", fav: false },
        { id: 2, text: "Javascript", fav: true },
    ],
    reducers: {
        addCour: (state, action) =>{
            //action {type="course/addCour" et le payload= "React native"}
            const newCour = {
                id: Math.floor(Math.random()*1000),
                fav: false,
                text: action.payload
            }
            state.push(newCour)
        },
        toggleCour: (state, action)=>{
            //action {type= "course/toggleCour" et le payload= 10}
            const cour = state.find(element => element.id === action.payload);
            cour.fav = !cour.fav
        },
        deleteCour: (state, action)=>{
            //action {type="couse/deleteCour" et le payload=20}
            return state = state.filter(element=> element.id !== action.payload)
        }
    }
}) 

export const {addCour,toggleCour,deleteCour} = courseSlice.actions


export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer,
        course: courseSlice.reducer
    }
})