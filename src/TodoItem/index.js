
import "./TodoItem.css"


const TodoItem = ({
    todo,
    onCompletedTodo,
    onConfirmDelete,

}) => {


    //{`completedIcon ${todo.completed && "completed"}`}

    return (
        <>
            <li className="TodoItem" >
                <button
                    className={`uncompleted-Icon ${todo.completed && "completed-Icon"}`}
                    onClick={() => onCompletedTodo(todo)}
                >
                    {
                        todo.completed
                            ? <ion-icon name="refresh-outline"></ion-icon>
                            : <ion-icon name="checkmark-circle-outline"></ion-icon>
                    }
                </button >
                <div
                    className={`titleTodo ${todo.completed && "completed"}`}
                >
                    {todo.title}
                </div>
                <button
                    className="deleteIcon"
                    onClick={() => onConfirmDelete(todo)}
                >
                    <ion-icon
                        name="trash-outline">
                    </ion-icon>
                </button>

            </li>
        </>
    )
}

export { TodoItem }