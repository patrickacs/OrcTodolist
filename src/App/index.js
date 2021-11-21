import { useState } from 'react';
import { ConfirmDelete } from '../ConfirmDelete';
import { CreateTodo } from '../CreateTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { Clock } from '../Timer';

import './App.css';




const App = () => {


  const [todos, setTodos] = useLocalStorage("TODOS_V1")
  const [searchValue, setSearchValue] = useState("")
  const [deleted, setDeleted] = useState(false)
  const [created, setCreated] = useState(false)
  const [indexTodo, setIndex] = useState("")
  const [newTodo, setNewTodo] = useState("")


  let listTodos = [...todos]

  searchValue && (
    listTodos = todos.filter(todo => (
      todo.title.includes(searchValue)
    ))

  )

  const handleCompletedTodo = (todoCompleted) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoCompleted.id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      } else {
        return todo
      }
    }))
  }


  const handleConfirmDelete = (todoDelete) => {


    deleted ? setDeleted(false) : setDeleted(true)
    setIndex(todoDelete.id)

  }

  const handleDeleteTodo = (confirm) => {

    if (confirm) {
      setTodos(todos.filter(todo => todo.id !== indexTodo))
      setDeleted(false)
    } else {
      setDeleted(false)
    }

  }

  const handleConfirmTodo = () => {
    created ? setCreated(false) : setCreated(true)
  }

  const handleCreateTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: newTodo,
        completed: false
      }
    ])
    setCreated(false)
  }



  return (
    <div className="App">
      <div className="todoForReal">
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="counter">
          <TodoCounter
            todos={todos}
          />
        </div>

        <TodoList >
          {
            (listTodos.length > 0)
              ? (
                listTodos.map(todo => (
                  <TodoItem
                  key={todo.id}
                    searchValue={searchValue}
                    todo={todo}
                    onCompletedTodo={handleCompletedTodo}
                    onConfirmDelete={handleConfirmDelete}

                    
                    />

                    )))
              : (
                <h3>Crie o seu primeiro To do ...
                </h3>

  )
          }





        </TodoList>
        <div className="downside">
          <CreateTodoButton onCreateTodo={handleConfirmTodo} />
          <Clock />
        </div>
      </div>
      {deleted
        && <ConfirmDelete
        onDeletedTodo={handleDeleteTodo}
          indexTodo={indexTodo}
          todos={todos}
          setTodos={setTodos}
        />
      }
      {created
        && <CreateTodo
          onConfirmTodo={handleConfirmTodo}
          onCreateTodo={handleCreateTodo}
          setNewTodo={setNewTodo}

        />
      }




    </div>
  );
}

export default App;
