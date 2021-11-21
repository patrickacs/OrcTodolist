import "./CreateTodoButton.css"

const CreateTodoButton = ({
    onCreateTodo,
}) => {
    return (

        <div className="CreateTodoButton">
            <button
                onClick={onCreateTodo}
            >
                <ion-icon name="add-outline"></ion-icon>
            </button>

        </div>


    )
}

export { CreateTodoButton }