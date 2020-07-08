import React from "react"
import "./Button.css"

const ButtonComponent = ({ type = "default", size = "small", disableShadow = false }) => {
  //generate class name based on props
  const generateClassName = () => {
    let className = `btn-${size} ${type} shadow `
    return className
  }
  //btn-small disableShadow
  return (
    <div>
      <button className="btn-small default outline">Default</button>
    </div >
  )
}

export default ButtonComponent