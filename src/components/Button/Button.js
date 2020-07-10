import React from "react"
import "./Button.scss"

const ButtonComponent = ({ color = "default", type = "default", size = "small", disableShadow = false, text = "Default" }) => {
  //generate class name based on props
  const generateClassName = () => {
    let className = `btn-${size} ${type} ${color}`
    className += disableShadow ? " disableShadow" : ""
    return className
  }
  console.log("class", generateClassName())
  //btn-small outline disbleShadow
  return (
    <button className={generateClassName()}>{text}</button>

  )
}

export default ButtonComponent