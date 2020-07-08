import React from "react"
import "./App.css"
import Button from "./Button/Button"



const App = () => {
  return (
    <div className="container">
      <Button type="default" />
      <Button type="outline" />
      <Button type="text" />
    </div>
  )
}
export default App