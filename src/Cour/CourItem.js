import { useDispatch } from "react-redux";
import { toggleCour, deleteCour } from "../redux";


const CourItem = ({ cour }) => {
   
    const dispatch = useDispatch()

    const scaleValue = 1.5; // Définis la valeur de mise à l'échelle

    const favActif = {
      transform: `scale(${scaleValue})`, // Utilise la propriété transform avec la valeur de mise à l'échelle
      color: 'red',
      marginRight: "20px",
      cursor: 'pointer'
    };

    const favInActif = {
        transform: `scale(${scaleValue})`, // Utilise la propriété transform avec la valeur de mise à l'échelle
        marginRight: "20px",
        cursor: 'pointer'
      };
    return (
      <div>
        <label>
         

          {cour.fav?(
             <i style={favActif}  onClick={() => dispatch(toggleCour(cour.id))} className="fa-solid fa-heart" />
          ):(
            <i style={favInActif} onClick={() => dispatch(toggleCour(cour.id))} className="fa-solid fa-heart" />
          )}
         

          
          
          {cour.text}
  
          <span
            onClick={() => dispatch(deleteCour(cour.id))}
            role="button"
            style={{ padding: "5px", marginLeft: "20px" }}
          >
            X
          </span>
        </label>
      </div>
    );
  };
  
  export default CourItem;
  