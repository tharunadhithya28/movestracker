import {Component} from 'react'
import Furniture from '../Furniture'
import Electronics from '../Electronics'
import Vehicle from '../Vehicle'
import Boxes from '../Boxes'
import Custom from '../Custom'
import './index.css'

class Additional extends Component {
  state = {
    furnitureOpen: false,
    electronicsOpen: false,
    vehicleOpen: false,
    boxesOpen: false,
    customOpen: false,
  }

  openInventory = () => {
    this.setState(prevState => ({furnitureOpen: !prevState.furnitureOpen}))
  }

  electronic = () => {
    this.setState(prevState => ({electronicsOpen: !prevState.electronicsOpen}))
  }

  vehicle = () => {
    this.setState(prevState => ({vehicleOpen: !prevState.vehicleOpen}))
  }

  boxes = () => {
    this.setState(prevState => ({boxesOpen: !prevState.boxesOpen}))
  }

  custom = () => {
    this.setState(prevState => ({customOpen: !prevState.customOpen}))
  }

  render() {
    const {
      furnitureOpen,
      electronicsOpen,
      vehicleOpen,
      boxesOpen,
      customOpen,
    } = this.state
    const {moveDetail} = this.props
    const {
      oldFloorNo,
      newFloorNo,
      oldParkingDistance,
      newParkingDistance,
      oldElevatorAvailability,
      newElevatorAvailability,
      inventory,
    } = moveDetail

    const furnitureData = inventory[0]
    const electronicsData = inventory[1]
    const vehicleData = inventory[2]
    const boxesData = inventory[3]
    const customData = inventory[4]

    console.log(moveDetail)
    console.log(furnitureData)
    return (
      <>
        <div className="sideBySide">
          <h1> Additonal Information </h1>
          <div>
            <button> Edit Additional Info </button>
          </div>
        </div>
        <p> Test Data </p>
        <div className="sideBySide">
          <h1> House Details </h1>
          <div>
            <button> Edit House Details</button>
          </div>
        </div>
        <h1> Existing Floor Details </h1>
        <div className="sideBySide">
          <div>
            <p> Floor No.</p>
            <p> {oldFloorNo} </p>
          </div>
          <div>
            <p> Elevator Available </p>
            <p> {oldElevatorAvailability} </p>
          </div>
          <div>
            <p> Distance from Elevator/Stairccase to truck </p>
            <p> {oldParkingDistance} </p>
          </div>
        </div>
        <h1> New House Details </h1>
        <div className="sideBySide">
          <div>
            <p> Floor No.</p>
            <p> {newFloorNo} </p>
          </div>
          <div>
            <p> Elevator Available </p>
            <p> {newElevatorAvailability} </p>
          </div>
          <div>
            <p> Distance from Elevator/Stairccase to truck </p>
            <p> {newParkingDistance} </p>
          </div>
        </div>
        <div>
          {furnitureOpen ? (
            <div>
              <div className="sideBySide">
                <h1> Furniture </h1>
                <div>
                  <button onClick={this.openInventory}> More </button>
                </div>
              </div>
              <div>
                <Furniture furnitureData={furnitureData} />
              </div>
            </div>
          ) : (
            <div className="sideBySide">
              <h1> Furniture </h1>
              <div>
                <button onClick={this.openInventory}> More </button>
              </div>
            </div>
          )}

          {electronicsOpen ? (
            <div>
              <div className="sideBySide">
                <h1> Electronics </h1>
                <div>
                  <button onClick={this.electronic}> More </button>
                </div>
              </div>
              <div>
                <Electronics electronicsData={electronicsData} />
              </div>
            </div>
          ) : (
            <div className="sideBySide">
              <h1> Electronics </h1>
              <div>
                <button onClick={this.electronic}> More </button>
              </div>
            </div>
          )}

          {vehicleOpen ? (
            <div>
              <div className="sideBySide">
                <h1> Vehicles </h1>
                <div>
                  <button onClick={this.vehicle}> More </button>
                </div>
              </div>
              <div>
                <Vehicle vehicleData={vehicleData} />
              </div>
            </div>
          ) : (
            <div className="sideBySide">
              <h1> Vehicles </h1>
              <div>
                <button onClick={this.vehicle}> More </button>
              </div>
            </div>
          )}

          {boxesOpen ? (
            <div>
              <div className="sideBySide">
                <h1> Boxes </h1>
                <div>
                  <button onClick={this.boxes}> More </button>
                </div>
              </div>
              <div>
                <Boxes boxesData={boxesData} />
              </div>
            </div>
          ) : (
            <div className="sideBySide">
              <h1>Boxes </h1>
              <div>
                <button onClick={this.boxes}> More </button>
              </div>
            </div>
          )}

          {customOpen ? (
            <div>
              <div className="sideBySide">
                <h1> Custom </h1>
                <div>
                  <button onClick={this.custom}> More </button>
                </div>
              </div>
              <div>
                <Custom customData={customData} />
              </div>
            </div>
          ) : (
            <div className="sideBySide">
              <h1>Custom </h1>
              <div>
                <button onClick={this.custom}> More </button>
              </div>
            </div>
          )}

          <hr />
        </div>
      </>
    )
  }
}
export default Additional
