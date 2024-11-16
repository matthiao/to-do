export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-2 p-2 border-b">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 text-red-600 hover:text-red-800"
      >
        ×
      </button>
    </div>
  )
}
