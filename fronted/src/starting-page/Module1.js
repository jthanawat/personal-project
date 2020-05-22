import React, { Component } from 'react'

export default class Module1 extends Component {
  render() {
    return (
      <div className="container">
        <div className="box">
          Welcome
          <div className="left-box">
            <p>Visitor</p>
            <p>Application</p>
            <p>Form</p>
          </div>

          <div className="right-box">
          <p>Please</p>
          <p>Fill your form</p>
          <p>Accurately</p>
          <p>Module1</p>
          </div>

        </div>

        <button type="submit"> Start </button>

        <div className="logo">

        </div>
        
      </div>
    )
  }
}
