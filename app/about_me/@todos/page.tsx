import styles from './todos.module.css'

async function getTodos() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('http://localhost:5174/test/todos', {
    method: 'GET',
  })
  const json = await response.json()
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return json
}

interface Todo {
  _id: number
  title: string
  createdAt: string
  deletedAt: string
}

export default async function TodosPage() {
  const todos = await getTodos()

  return (
    <div className={styles.container}>
      <h2>My Routine</h2>
      <ul className={styles.todolist}>
        {todos.map((todo: Todo) => (
          <li key={`todo_${todo._id}`}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
