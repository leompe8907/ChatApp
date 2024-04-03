import React, {useState} from 'react'

export default function MessageInput() {
    const { inputValue, setInputValue} = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }
  return (
    <div className='message-input'>
      <textarea
        placeholder='Escribe un Mensaje'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type='submit' onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  )
}
