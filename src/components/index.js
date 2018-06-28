import React, { Component } from "react"
import ReactTooltip from 'react-tooltip'
import avatar from "./../assets/images/myAvatar.png"
import jysk from "./../assets/images/icon-jysk.ico"
import hotel from "./../assets/images/icon-hotelJob.ico"
import donald from "./../assets/images/icon-donald-arc.png"
import amwal from "./../assets/images/icon-amwal.png"
import finance from "./../assets/images/icon-finance.png"
import continal from "./../assets/images/icon-continal.ico"

const App = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar__avatar">
          <img src={avatar} alt='avatar' />
        </div>
        <div className="sidebar__des">
          <h2>Bui Duc Cuong</h2>
          <h4>Frontend Developer</h4>
        </div>
        <div className="sidebar__block">
          <h4 className="title">Personal</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">Name:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Date of birth:</th>
                <td>30 - 05 - 1989</td>
              </tr>
              <tr>
                <th scope="row">Nationality:</th>
                <td>Viet Nam</td>
              </tr>
              <tr>
                <th scope="row">Language:</th>
                <td>Vietnamese, English</td>
              </tr>
              <tr>
                <th scope="row">Sex:</th>
                <td>Male</td>
              </tr>
              <tr>
                <th scope="row">Relationship:</th>
                <td>Married</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sidebar__block">
          <h4 className="title">Contact</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">Mobile 1:</th>
                <td>(+84) 944 76 4545</td>
              </tr>
              <tr>
                <th scope="row">Mobile 2:</th>
                <td>(+84) 164 326 7218</td>
              </tr>
              <tr>
                <th scope="row">Skype:</th>
                <td>duccuong3005</td>
              </tr>
              <tr>
                <th scope="row">FaceBook:</th>
                <td>
                  <a target="blank" href="https://www.facebook.com/m4y1989">m4y1989</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sidebar__block">
          <h4 className="title">Soft Skills</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">Teamwork:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'90%'}} data-value="9/10" />
                    <div className="progress">
                      <div className="value" style={{width:'90%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Communicate:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'70%'}} data-value="7/10" />
                    <div className="progress">
                      <div className="value" style={{width:'70%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Capacity to work under pressure:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'80%'}} data-value="8/10" />
                    <div className="progress">
                      <div className="value" style={{width:'80%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Critical thinking:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'80%'}} data-value="8/10" />
                    <div className="progress">
                      <div className="value" style={{width:'80%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Design knowledge:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'70%'}} data-value="7/10" />
                    <div className="progress">
                      <div className="value" style={{width:'70%'}} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sidebar__block">
          <h4 className="title">Technical Skills</h4>
          <table>
            <tbody>
              <tr>
                <th>Html/Pug-Jade:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'90%'}} data-value="9/10" />
                    <div className="progress">
                      <div className="value" style={{width:'90%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Scss/Css:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'90%'}} data-value="9/10" />
                    <div className="progress">
                      <div className="value" style={{width:'90%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Javascript:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'70%'}} data-value="7/10" />
                    <div className="progress">
                      <div className="value" style={{width:'70%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>React:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'60%'}} data-value="6/10" />
                    <div className="progress">
                      <div className="value" style={{width:'60%'}} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Git:</th>
                <td>
                  <div className="skill">
                    <p style={{width:'70%'}} data-value="7/10" />
                    <div className="progress">
                      <div className="value" style={{width:'70%'}} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <main>
        <div className="main__block">
          <h4 className="title">About Me</h4>
          <p>I'm a front-end developer who is passionate about html/css & js, building great user experiences, fighting for simplicity over complexity, constantly learning and someone who strives to mentor and share with other developers around me.<br />
          </p>
          <blockquote>
            "The most important thing is better than were yesterday."
          </blockquote>
        </div>
        <div className="main__block">
          <h4 className="title">Education</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">University:</th>
                <td>Thang Long University</td>
              </tr>
              <tr>
                <th scope="row">Specialize:</th>
                <td>Information management system</td>
              </tr>
              <tr>
                <th scope="row">Passing Year:</th>
                <td>2014</td>
              </tr>
              <tr>
                <th scope="row">Degree:</th>
                <td>Bachelor's Degree</td>
              </tr>
            </tbody>
          </table>
          <p>Seft study from W3schools, codecamp, google, stack overflow and many more...until now.</p>
        </div>
        <div className="main__block">
          <h4 className="title">Work Experience</h4>
          <h5>ACT Group Company (2014 - 2015)</h5>
            <ul>
              <li>
                <p>Outsourcing</p>
              </li>
              <li>
                <p>Position: Markup - Styler</p>
              </li>
              <li>
                <p>Description Job: Work with designer & marketing team to decide what our products look like, and how it work. Convert Psd to raw Html, Css, and Jquery, or to Company's Cms, be sure it's responsive and look good it common device.</p>
              </li>
              <li>
                <div className="products-icon">
                  Some products:
                  <a data-for='global' data-tip="JYSK" href="http://jysk.vn/">
                    <img src="http://via.placeholder.com/26/ccc/fff" alt="jysk" />
                  </a>
                  <a data-for='global' data-tip="Hotel Job" href="https://www.hoteljob.vn/">
                    <img src="http://via.placeholder.com/26/000/fff" alt="hotel job" />
                  </a>
                </div>
              </li>
              <li>
                <div className="skill-tag">
                  Skills: 
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                  <div className="tag">BOOTSTRAP</div>
                  <div className="tag">JQUERY</div>
                  <div className="tag">PHOTOSHOP</div>
                </div>
              </li>
            </ul>
          <hr />

          <h5>Ocean Themes & FreeLance (2015 - 2016)</h5>
          <ul>
            <li>
              <p>Position: Front End Dev</p>
            </li>
            <li>
              <p>Product</p>
            </li>
            <li>
              <p>Description Job: Work with UI UX Designer 
              to translation of the UI/UX design wireframes to actual code, include animation, pixel perfect...and work with backend for code quantity, speed performance.
              The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.
              </p>
            </li>
            <li>
              <div className="products-icon">
                Some products:
                <a data-html={true} data-for='global' 
                  data-tip="
                    <h5>donald arc</h5>
                    <p>Interio Design</p>
                    <p>Just Click to view</p>"
                  href="http://templates.thememodern.com/donald-arch-light/">
                  <img src={donald} alt="donald arc" />
                </a>
                <a data-for='global' data-tip="amwal" href="http://templates.thememodern.com/amwal/">
                  <img src={amwal} alt="amwal" />
                </a>
                <a data-for='global' data-tip="finance" href="http://templates.thememodern.com/finance/">
                  <img src={finance} alt="finance" />
                </a>
                <a data-for='global' data-tip="continal" href="http://templates.thememodern.com/continal/">
                  <img src={continal} alt="continal" />
                </a>
              </div>
            </li>
            <li>
              <div className="skill-tag">
                Skills: 
                <div className="tag">HTML</div>
                <div className="tag">SCSS</div>
                <div className="tag">BOOTSTRAP</div>
                <div className="tag">JQUERY</div>
                <div className="tag">GRUNT</div>
                <div className="tag">PHOTOSHOP</div>
              </div>
            </li>
          </ul>
          <hr />

          <h5>Framgia Inc (2016 - 2018)</h5>
          <ul>
            <li>
              <p>Position: Front End Dev</p>
            </li>
            <li>
              <p>Outsourcing</p>
            </li>
            <li>
              <p>Description Job: Work with UI UX Designer 
              to translation of the UI/UX design wireframes to actual code, include animation, pixel perfect...and work with backend for code quantity, speed performance.
              The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.

                From 6/2017 ultil now, i work as react dev.
              </p>
            </li>
            <li>
              <div className="skill-tag">
                Skills: 
                <div className="tag">HTML</div>
                <div className="tag">PUG TEMPLATE</div>
                <div className="tag">SCSS</div>
                <div className="tag">LESS</div>
                <div className="tag">BOOTSTRAP</div>
                <div className="tag">JAVASCRIPT</div>
                <div className="tag">REACT</div>
                <div className="tag">WEBPACK</div>
                <div className="tag">PHOTOSHOP</div>
                <div className="tag">SKETCH</div>
                <div className="tag">ZEPLIN</div>
                <div className="tag">FIGMA</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="main__block">
          <h4 className="title">Interest:</h4>
          <p>Js, good teamate, high salary, dota2, music, stack overflow, codecamp...</p>
        </div>

        <div>
          dang test:
          The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.

          Often front-end development of a website is overlooked, but being the part of your project that combines design, back-end development and the layer that your users interact with, from my experience, it is the most important to get right.

        </div>
        <div>
          <h4>muc tieu gan</h4>
          Wtan to become pro js
          <h4> muc tieu xa</h4>
          Can work good with common framework, translate all youdontknow js es6
          pro js
          can design
          can work with react native at good.
        </div>
      </main>
      <ReactTooltip id="global" place="top" type="dark" effect="float" 
        getContent={(dataTip) => `${dataTip}`}
      >
      </ReactTooltip>
    </div>
  )
}

export default App