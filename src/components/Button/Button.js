import React from "react"
import "./Button.scss"
import PropTypes from 'prop-types'
const ButtonComponent = ({ color, type, size, disableShadow, text }) => {
  console.log(document.body.parentNode)
  //generate class name based on props
  const generateClassName = () => {
    let className = `btn-${size} ${type} ${color}`
    className += disableShadow ? " disableShadow" : ""
    return className
  }
  //btn-small outline disbleShadow
  return (
    <div className="btn-div">
      <button className={generateClassName()}>{text}</button>
    </div>

  )
}
ButtonComponent.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disableShadow: PropTypes.bool,
  text: PropTypes.string.isRequired
}
ButtonComponent.defaultProps = {
  color: "default",
  type: "default",
  size: "sm",
  disableShadow: false
}

export default ButtonComponent