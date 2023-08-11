import "./styles.css";
import TaskForm from "./Tache/TaskForm";
import TasksHeader from "./Tache/TasksHeader";
import TasksList from "./Tache/TasksList";
import  './App.css'
import CoursHeader from "./Cour/CoursHeader";
import CoursList from "./Cour/coursList";
import CourForm from "./Cour/CourForm";
import { Provider } from "react-redux";
import {store} from "./redux"

export default function App() {
 
 

  return (
    <Provider store={store}>
         <div className="container">
      <article style={{width:"500px"}}>
        <TasksHeader/>
        <TasksList
        />
        <footer>
          <TaskForm/>
        </footer>
      </article>

      <article style={{width:"500px"}}>
        <CoursHeader/>
        <CoursList
        />
        <footer>
          <CourForm/>
        </footer>
      </article>
    </div>
    </Provider>
   
  );
}
