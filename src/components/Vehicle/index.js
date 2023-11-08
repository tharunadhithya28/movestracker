import {Component} from 'react'
import './index.css'

class Vehicle extends Component {
  render() {
    const {vehicleData} = this.props
    const sofa = vehicleData.category[0]
    console.log(sofa)
    const table = vehicleData.category[1]
    const chair = vehicleData.category[2]

    return (
      <>
        <div>
          <div className="furnitureFilter">
            <div>
              <h1> Cycle </h1>
              {sofa.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Bike </h1>
              {table.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Car </h1>
              {chair.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Vehicle
