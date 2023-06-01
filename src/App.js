import React from 'react'
import { useState } from 'react'
import './App.css'
import List from './components/List'

export default function App() {
  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState('')

  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    }
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    console.log('newTodoData', newTodoData)
    setTodoData(newTodoData)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    //form 안에 input 을 전송 할 때 페이지 리로드 되는 것을 막아줌
    event.preventDefault()

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData((prev) => [...prev, newTodo])
    setValue('')
  }
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newTodoData)
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} />

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input type="submit" value="입력" className="btn" style={{ flex: '1' }} />
        </form>
      </div>
    </div>
  )
}
