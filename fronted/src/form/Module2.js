import React, { Component } from 'react'
import '../style/form/Module2.css'
import Logo from '../image/Logo.png'

export default class Module2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="form-container">
        <div className="form-box-border">
          <div className="boxInForm">
            <div className="header">
              <p className="heading"> Module1 <br />
                <span style={style}> Type a description</span></p>
              <p className="description">  </p>
              <div className="border"></div>
            </div>

            <div className="survey">
              <div className="q1">
                <form action="#">
                  <label className="topic">Visiting from...<span style={{ color: 'red' }}>*</span> </label>
                  <br /> < br />
                  <input type="radio" id="synhub" name="synhub" /> <span>SYN HUB Co-Innovative Space</span>
                  <br />
                  <input type="radio" id="synhub" name="synhub" /> <span>Syntech Innovation Co., Ltd.</span>
                </form>
              </div>

              <div className="q2">
                <form action="#">
                  <label className="topic">Upload your card</label>
                  <br /> < br />
                  <input type="file" /> <button> Camera </button>
                </form>
              </div>

              <div className="q3">
                <form action="#">
                  <label className="topic">Purpose of Visiting<span style={{ color: 'red' }}>*</span></label>
                  <br /> <br />
                  <input type="radio" id="#" name="#" /> <span> Workshop</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> CodeCamp</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Cafe</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Other</span>
                </form>
              </div>

              <div className="q4">
                <form action="#">
                  <label className="topic">Interested in our Product<span style={{ color: 'red' }}>*</span></label>
                  <br /> <br />
                  <input type="radio" id="#" name="#" /> <span> EduTech Workshops</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Energy Management System</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> PCB/PCBA</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Robotics</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Smart Building</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Smart Environment</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Smart Health Products</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Smart Juristic Platform</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Smart Lighting System</span>
                  <br />
                  <input type="radio" id="#" name="#" /> <span> Water Monitoring System</span>
                </form>
              </div>

              <button type="submit" className="Finished-button"> Submit </button>

            </div>

          </div>
        </div>
        </div>
      </div>
    )
  }
}
