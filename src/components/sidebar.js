import React from "react"
import sidebarData from './../data/sidebarData'
import avatar from "./../assets/images/myAvatar.png"

const Sidebar = () => {
  return (
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
            {sidebarData.personal.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}:</th>
                  <td>{item.content}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="sidebar__block">
        <h4 className="title">Contact</h4>
        <table>
          <tbody>
            {sidebarData.contact.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}:</th>
                  <td>{item.content}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="sidebar__block">
        <h4 className="title">Soft Skills</h4>
        <table>
          <tbody>
            {sidebarData.softSkills.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}:</th>
                  <td>
                    <div className="skill">
                      <div className="progress">
                        <div className="value" style={{width: item.value}} />
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="sidebar__block">
        <h4 className="title">Technical Skills</h4>
        <table>
          <tbody>
            {sidebarData.techinicalSkills.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}:</th>
                  <td>
                    <div className="skill">
                      <div className="progress">
                        <div className="value" style={{width: item.value}} />
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Sidebar