import "./ConfirmDelete.css"

const ConfirmDelete = ({ onDeletedTodo }) => {
    return (
        <div className="ConfirmDelete">
            <div className="confirm-container">
                <h4>Você tem certeza que quer deletar esse To do ?</h4>
                <button
                    className="confirmButton"
                    onClick={() => onDeletedTodo(true)}
                >Sim
                </button>
                <button
                    className="cancelButton"
                    onClick={() => onDeletedTodo(false)}
                >Não
                </button>

            </div>

        </div>
    )
}

export { ConfirmDelete }