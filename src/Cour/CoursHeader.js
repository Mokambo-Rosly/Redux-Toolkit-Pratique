import { useSelector } from 'react-redux';
import logo from '../13142323.png'

const CoursHeader = () => {
  const cours = useSelector(state=> state.course)
  const undonecours = cours.filter((t) => t.fav === true);

  return (
    <header style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', height:'200px'}}>
      <div>
        <h3>React Courses List</h3>
        <p>
          Cours en favoris : <strong>{undonecours.length}</strong>
        </p>
      </div>
      <div>
       <img src={logo} alt='Logo' width={140}/>
      </div>
    
    </header>
  );
};

export default CoursHeader;
