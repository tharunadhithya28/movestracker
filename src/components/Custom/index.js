import {Component} from 'react'

class Custom extends Component {
  render() {
    const {customData} = this.props
    const sofa = customData.category[0]
    console.log(sofa)
    const table = customData.category[1]

    return (
      <>
        <div>
          <div className="furnitureFilter">
            <div>
              <h1> Other Appliances </h1>
              {sofa.items.map(eachItem => (
                <p> {eachItem.displayName} </p>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Custom
