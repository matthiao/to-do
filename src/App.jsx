import { useState } from 'react'
import TodoItem from './components/TodoItem'
import useTodos from './hooks/useTodos'

export default function App() {
  const [input, setInput] = useState('')
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      addTodo(input.trim())
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
        
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </form>

        <div className="space-y-1">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
        
        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No todos yet!</p>
        )}
      </div>
    </div>
  )
}
