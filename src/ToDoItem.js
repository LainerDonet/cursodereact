
function TodoItem({tarea, completed}) {
    return (
      <li>
        <span>V</span>
          <p>{tarea}</p>
        <span>X</span>
      </li>
    )
    
  } 

export {TodoItem}