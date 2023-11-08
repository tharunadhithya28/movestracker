import {Component} from 'react'
import './index.css'

class Boxes extends Component {
  render() {
    const {boxesData} = this.props
    const sofa = boxesData.category[0]
    console.log(sofa)
    const table = boxesData.category[1]
    const chair = boxesData.category[2]
    const cot = boxesData.category[3]
    return (
      <>
        <div>
          <div className="furnitureFilter">
            <div>
              <h1> Gym </h1>
              {sofa.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Musical Instruments </h1>
              {table.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Fragile</h1>
              {chair.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Home Appliance </h1>
              {cot.items.map(eachItem => (
                <p> {eachItem.displayName}</p>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Boxes
