import React from "react"
import "./App.css"
import Button from "./Button/Button"




const App = () => {
  return (
    <div className="container">
      <div className="headers">
        <h1>Buttons</h1>
      </div>
      <div className="buttons">
        <Button color="default" type="default" text="Default" />
        <Button color="primary" type="default" text="primary" />
        <Button color="secondary" type="default" text="secondary" />
        <Button color="success" type="default" text="Success" />
        <Button color="danger" type="default" text="danger" />

        <Button color="default" type="outline" text="Default Outline" />
        <Button color="primary" type="outline" text="primary Outline" />
        <Button color="secondary" type="outline" text="Secondary Outline" />
        <Button color="success" type="outline" text="Success Outline" />
        <Button color="danger" type="outline" text="Danger Outline" />

        <Button color="default" type="text" text="Default Text" />
        <Button color="primary" type="text" text="primary Text" />
        <Button color="secondary" type="text" text="secondary Text" />
        <Button color="success" type="text" text="Success Text" />
        <Button color="danger" type="text" text="danger Text" />
        <Button color="default" type="default" text="defualt disableShadow" disableShadow />
      </div>
    </div>
  )
}
export default App