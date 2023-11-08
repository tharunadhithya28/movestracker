import {Component} from 'react'
import MenuBar from '../MenuBar'
import MyMoves from '../MyMoves'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="homeseparation">
          <MenuBar />
          <MyMoves />
        </div>
      </>
    )
  }
}

export default Home
