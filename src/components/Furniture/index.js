import {Component} from 'react'
import './index.css'

class Furniture extends Component {
  render() {
    const {furnitureData} = this.props
    const sofa = furnitureData.category[0]
    console.log(sofa)
    const table = furnitureData.category[1]
    const chair = furnitureData.category[2]
    const cot = furnitureData.category[3]
    return (
      <>
        <div>
          <div className="furnitureFilter">
            <div>
              <h1> Sofa </h1>
              {sofa.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Table </h1>
              {table.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Chair</h1>
              {chair.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Cot </h1>
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
export default Furniture
