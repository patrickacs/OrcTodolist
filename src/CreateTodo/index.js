import "./CreateTodo.css"

const CreateTodo = ({
    onConfirmTodo,
    onCreateTodo,
    setNewTodo,
}) => {

    const handleSubmit = (e) => {
        e.preventDefault()


    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    return (
        <div className="CreateTodo">
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="todoInput"
                    className="title">
                    Crie o seu To do 
                </label>
                <input
                    id="todoInput"
                    className="todoInput"
                    onChange={handleChange}

                    type="text"
                    placeholder="Escreva o seu To Do Aqui ..."
                />
                <div className="buttons">
                    <button
                        className="buttons__cancel"
                        onClick={onConfirmTodo}
                    >
                        <span>Cancelar</span>
                    </button>
                    <button
                        className="buttons__add"
                        onClick={onCreateTodo}
                    >
                        <span>Add</span>
                    </button>

                </div>


            </form>
        </div>
    )
}

export { CreateTodo }