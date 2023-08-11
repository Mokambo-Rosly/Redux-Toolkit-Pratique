import { useSelector } from 'react-redux';
import logo from '../13142323.png'

const TasksHeader = () => {
  const tasks = useSelector(state=> state.todo)
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', height:'200px'}}>
      <div>
        <h3>React Todo List</h3>
        <p>
          Tâches à faire : <strong>{undoneTasks.length}</strong>
        </p>
      </div>
      <div>
       <img src={logo} alt='Logo' width={140}/>
      </div>
    
    </header>
  );
};

export default TasksHeader;
