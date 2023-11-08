import {Component} from 'react'
import './index.css'

class Electronics extends Component {
  render() {
    const {electronicsData} = this.props
    const sofa = electronicsData.category[0]
    console.log(sofa)
    const table = electronicsData.category[1]
    const chair = electronicsData.category[2]
    const cot = electronicsData.category[3]
    return (
      <>
        <div>
          <div className="furnitureFilter">
            <div>
              <h1> TV </h1>
              {sofa.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Referrgator </h1>
              {table.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Washing Machine </h1>
              {chair.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
            <div>
              <h1> Oven </h1>
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
export default Electronics
