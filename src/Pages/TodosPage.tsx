import React, { useState, useEffect } from 'react'
import { TodoForm } from '../Components/ToDoForm'
import { TodoList } from '../Components/ToDoList'
import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setUpdate(update+1)
    let copy = todos
    for (let i = 0; i < copy.length; i++){
      if(copy[i].id === id){
        copy[i].completed = !copy[i].completed
      }
    }
    setTodos(copy)
  }

  const removeHandler = (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить элемент?')) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  )
}
