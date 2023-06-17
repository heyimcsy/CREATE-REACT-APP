import React from 'react'

export default function Form({ value, setValue, handleSubmit }) {
  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return (
    <form className="flex pt-2" onSubmit={handleSubmit}>
      <input
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        type="text"
        name="value"
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="입력"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
      />
    </form>
  )
}
