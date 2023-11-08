import {Component} from 'react'
import './index.css'

class MenuBar extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <li>
            <p> MY MOVES </p>
          </li>
          <li>
            <p> MY PROFILE </p>
          </li>
          <li>
            <p> GET QUOTE </p>
          </li>
          <li>
            <p> LOGOUT </p>
          </li>
        </div>
      </>
    )
  }
}
export default MenuBar
