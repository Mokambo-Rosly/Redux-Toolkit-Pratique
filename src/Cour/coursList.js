import { useSelector } from "react-redux";
import CourItem from "./CourItem";

const CoursList = () => {
  const cours = useSelector(state => state.course)
  return (
    <>
      {cours.map((t) => (
        <CourItem
          cour={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default CoursList;
