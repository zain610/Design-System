import React from "react"
import "./Button.css"

const ButtonComponent = ({ type, size }) => {
  return (
    <div>
      <button className='btn-small default shadow'>Default</button>
      <button className='btn-medium default shadow'>Default</button>
      <button className='btn-large default shadow'>Default</button>
    </div >
  )
}

export default ButtonComponent