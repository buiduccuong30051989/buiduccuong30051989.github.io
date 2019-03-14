import React from "react"
import ReactTooltip from 'react-tooltip'

import jysk from "./../assets/images/icon-jysk.png"
import hotel from "./../assets/images/icon-hotel.png"
import donald from "./../assets/images/icon-donald-arc.png"
import amwal from "./../assets/images/icon-amwal.png"
import finance from "./../assets/images/icon-finance.png"
import continal from "./../assets/images/icon-continal.ico"

const Content = () => {
  return (
    <main>
      <div className="main__block">
        <h4 className="title">About Me</h4>
        <p>I'm a front-end developer who is passionate about html/css & js, building great user experiences, fighting for simplicity over complexity, constantly learning and someone who strives to mentor and share with other developers around me.<br />
        </p>
        <blockquote>
          "The most important thing is better than you were yesterday."
        </blockquote>
      </div>
      <div className="main__block">
        <h4 className="title">Work Experience</h4>
        <h5>Framgia Inc (2016 - now)</h5>
        <ul>
          <li>
            <p>Outsourcing</p>
          </li>
          <li>
            <p>Position: Front End Dev</p>
          </li>
          <li>
            <p>Description Job: Work with UI UX Team and Backend Team to decide what our product look like and how does users interact with, be sure our product bring all designer's ideals not only in pixel but also animation & effect. After all, work with Tester and q/a Team, fighting with bugs to be sure our prdduct would have highest quality.
            </p>
           <p>From 6/2017 ultil now, i have decided to try hard in react js, so, beside markup, i have more time to spend width backend and i must know business of customer. It's not about how this web translation from screen to screen, it's about how it work.
           </p>
          </li>
          <li>
            <div className="skill-tag">
              Skills: 
              <div className="tag">HTML</div>
              <div className="tag">PUG TEMPLATE</div>
              <div className="tag">SCSS</div>
              <div className="tag">LESS</div>
              <div className="tag">GULP</div>
              <div className="tag">BOOTSTRAP</div>
              <div className="tag">JAVASCRIPT</div>
              <div className="tag">REACT</div>
              <div className="tag">REDUX</div>
              <div className="tag">PHOTOSHOP</div>
              <div className="tag">SKETCH</div>
              <div className="tag">ZEPLIN</div>
              <div className="tag">FIGMA</div>
            </div>
          </li>
        </ul>
        <hr />
        <h5>Ocean Themes & FreeLance (2015 - 2016)</h5>
        <ul>
          <li>
            <p>Product</p>
          </li>
          <li>
            <p>Position: Front End Dev</p>
          </li>
          <li>
            <p>Description Job: Work with UI UX Designer to translation of the UI/UX design wireframes to actual code, include animation, pixel perfect...and work with backend for code quality, speed performance. 
              {/* The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so customer can enhance a website as their company grows. */}
            </p>
          </li>
          <li>
            <div className="products-icon">
              Some products:
              <a 
                data-html={true} 
                data-for='global' 
                data-tip="
                  <h4>Project: Donald Arc</h4>
                  <p>Interior Design</p>
                  <p>Just Click to view &#8594;</p>"
                target="blank"
                href="http://templates.thememodern.com/donald-arch-light/">
                <img src={donald} alt="donald arc" />
              </a>
              <a
                data-html={true} 
                data-for='global' 
                data-tip="
                  <h4>Project: Amwal</h4>
                  <p>Business Financical Design</p>
                  <p>Just Click to view &#8594;</p>"
                target="blank"
                href="http://templates.thememodern.com/amwal/">
                <img src={amwal} alt="amwal" />
              </a>
              <a
                data-html={true} 
                data-for='global' 
                data-tip="
                  <h4>Project: Finance</h4>
                  <p>Business Financical Design</p>
                  <p>Just Click to view &#8594;</p>"
                target="blank"
                href="http://templates.thememodern.com/finance/">
                <img src={finance} alt="finance" />
              </a>
              <a
                data-html={true} 
                data-for='global' 
                data-tip="
                  <h4>Project: Continal</h4>
                  <p>Business Construction Design</p>
                  <p>Just Click to view &#8594;</p>"
                target="blank"
                href="http://templates.thememodern.com/continal/">
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
                <a 
                  data-html={true} 
                  data-for='global' 
                  data-tip="
                    <h4>Project: JYSK</h4>
                    <p>Furniture and Interior Décor</p>
                    <p>Just Click to view &#8594;</p>"
                  target="blank"
                  href="http://jysk.vn/">
                  <img src={jysk} alt="Jysk" />
                </a>
                <a 
                  data-html={true} 
                  data-for='global' 
                  data-tip="
                    <h4>Project: Hotel Job</h4>
                    <p>Career Hotel Job Social</p>
                    <p>Just Click to view &#8594;</p>"
                  target="blank"
                  href="https://www.hoteljob.vn/">
                  <img src={hotel} alt="Hotel Job" />
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
        <p>Study from team mate, from W3schools, codecamp, google, stack overflow and many more...until now.</p>
      </div>
      <div className="main__block">
        <h4 className="title">Interest:</h4>
        <ul>
          <li>Javascript</li>
          <li>Dota2</li>
          <li>Music</li>
          <li>Film: Friends</li>
          ...
        </ul>
      </div>
      <ReactTooltip id="global" place="top" type="dark" effect="float" 
        getContent={(dataTip) => `${dataTip}`}
      >
      </ReactTooltip>
    </main>
  )
}

export default Content
