import React from "react"
import "./Button.css"

const ButtonComponent = ({ type = "default", size = "small", disableShadow = false }) => {
  //generate class name based on props
  const generateClassName = () => {
    let className = `btn-${size} ${type} `
    return className
  }


  return (
    <div>
      <button className={generateClassName()}>Default</button>
    </div >
  )
}

export default ButtonComponent