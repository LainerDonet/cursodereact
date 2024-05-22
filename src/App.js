import { TodoCounter } from "./ToDoCounter";
import { TodoSearch } from "./ToDoSearch";
import { TodoList } from "./ToDoList";
import { CreateTodoButton } from "./CreateToDoButton";
import { TodoItem } from "./ToDoItem";
import '@patternfly/react-core/dist/styles/base.css';

const tareasDefault = [
  {tarea: "Terminar Curso de React", completed: false },
  {tarea: "Publicar noticias", completed: true },
  {tarea: "Desarrollo de Patterflay",  completed: true}
]

function App() {
  return (
    <>

      <TodoCounter/>
      <TodoSearch/>
     <TodoList>
     {tareasDefault.map( tarea =>(
      <TodoItem key={tarea.tarea} tarea={tarea.tarea} completed={tarea.completed}/>
     ))

     }
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}



export default App;
