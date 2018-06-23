import React, { Component } from "react"
import avatar from "./../assets/images/avatar.jpg"

const App = () => {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar__avatar">
          <img src={avatar} alt='avatar' />
        </div>
        <h2>Bui Duc Cuong</h2>
        <h4>Frontend Engineer</h4>
        <div className="sidebar__block">
          <h4 className="title">Personal</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Date of birth</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Nationality</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Language</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Sex</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Relationship</th>
                <td>Bui Duc Cuong</td>
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
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Mobile 2:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Skype:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">FaceBook:</th>
                <td>Bui Duc Cuong</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sidebar__block">
          <h4 className="title">Soft Skills</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">Mobile 1:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Mobile 2:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Skype:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">FaceBook:</th>
                <td>Bui Duc Cuong</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sidebar__block">
          <h4 className="title">Technical Skills</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">Mobile 1:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Mobile 2:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Skype:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">FaceBook:</th>
                <td>Bui Duc Cuong</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <main>
        <div className="main-block">
          <h4 className="title">About Me</h4>
          <p>I'm a front-end developer who is passionate about html/css & js, building great user experiences, fighting for simplicity over complexity, constantly learning and someone who strives to mentor and share with other developers around me.
            From scare js to interesting it, i'm on my way...
            the most important thing is you better than u yesterday
          </p>
        </div>
        <div className="main-block">
          <h4 className="title">Education</h4>
          <table>
            <tbody>
              <tr>
                <th scope="row">University:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Specialize:</th>
                <td>Information management system</td>
              </tr>
              <tr>
                <th scope="row">Passing Year:</th>
                <td>Bui Duc Cuong</td>
              </tr>
              <tr>
                <th scope="row">Degree:</th>
                <td>Bachelor's Degree</td>
              </tr>
            </tbody>
          </table>
          <quote>Start Seft Study from W3Schools, codeschool, codecamp, google and many more...until now.</quote>
        </div>
        <div className="main-block">
          <h4 className="title">Work Experience</h4>
          <h5>Markup - Styler</h5>
          <p>ACT Group Company (2015 - 2016)</p>
          <p>Team Lead</p>
          <p>
            Convert Psd to Html, customize company's CMS.
          </p>
          <p> Using HTML, Css3.</p>
          <p>Some product:</p>

          <h5>Front End Engineer</h5>
          <p>Ocean Themes & FreeLance 2016 - 2017</p>
          <p>Product</p>
          <p>Convert Psd to Html. Using some tasks runner with higher quantity, and validation</p>
          <p>Grunt Grulp Photoshop Html/Css, Js & almost Jquery</p>
          <p>Some Product: </p>

          <h5>Fron End Engineer</h5>
          <p>Framgia Inc</p>
          <p>Outsourcting</p>
          <p>Comunicate with BE, BRSE, event Customer and Designer for a good ui, better ux</p>
          <p>From 6/2017 until now, work as react developer</p>
          <p>HTML5, CSS3, Gulp, Webpack, Git, React, Redux, Js</p>
          <p>IDE almost sublime, whatever..</p>
        </div>

        <div className="main-block">
          <h4 className="title">Interest:</h4>
          <p>Js, good teamate, high salary, dota2, music...stack overflow, codecamp</p>
        </div>

        <div>
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
    </div>
  )
}

export default App