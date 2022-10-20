import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      return oldToDos.map((toDo) => {
        return toDo.id === id ? { text, id, category: newCategory } : toDo;
      });
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>DOING</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>DONE</button>
      )}
    </li>
  );
};

export default ToDo;
