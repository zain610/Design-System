import React from "react"
import "./Button.scss"

const ButtonComponent = ({ type = "default", size = "small", disableShadow = false }) => {
  //generate class name based on props
  const generateClassName = () => {
    let className = `btn-${size} ${type} shadow `
    return className
  }
  //btn-small disableShadow
  return (
    <div>
      <button className="btn-small primary">Default</button>
      <button className="btn-small primary outline">Default</button>
      <button className="btn-small primary text">Default</button>
    </div >
  )
}

export default ButtonComponent