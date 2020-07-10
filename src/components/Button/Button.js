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
      <div>
        <button className="btn-small default">Default</button>
        <button className="btn-small default outline">Default</button>
        <button className="btn-small default text">Default</button>
      </div>
      <div>
        <button className="btn-small primary">Primary</button>
        <button className="btn-small primary outline">Primary</button>
        <button className="btn-small primary text">Primary</button>
      </div>

      <div>
        <button className="btn-small secondary">Secondary</button>
        <button className="btn-small secondary outline">Secondary</button>
        <button className="btn-small secondary text">Secondary</button>
      </div >
      <div>
        <button className="btn-small danger">Danger</button>
        <button className="btn-small danger outline">Danger</button>
        <button className="btn-small danger text">Danger</button>
      </div>
      <div>
        <button className="btn-small success">Success</button>
        <button className="btn-small success outline">Success</button>
        <button className="btn-small success text">Success</button>
      </div>
    </div>
  )
}

export default ButtonComponent