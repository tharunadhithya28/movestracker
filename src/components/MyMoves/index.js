import {Component} from 'react'
import MoveItem from '../MoveItem'
import './index.css'

class MyMoves extends Component {
  state = {
    movesData: [],
    specificItems: [],
    viewDetails: false,
  }

  componentDidMount() {
    this.getMoves()
  }

  toggleViewDetails = () => {
    this.setState(prevState => ({viewDetails: !prevState.viewDetails}))
  }

  getMoves = async () => {
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const eachMoveData = data.Customer_Estimate_Flow.map(eachItem => ({
      movingFrom: eachItem.moving_from,
      movingTo: eachItem.moving_to,
      propertySize: eachItem.property_size,
      totalItems: eachItem.total_items,
      distance: eachItem.distance,
      movingOn: eachItem.moving_on,
      userId: eachItem.user_id,
      oldFloorNo: eachItem.old_floor_no,
      oldElevatorAvailability: eachItem.old_elevator_availability,
      oldParkingDistance: eachItem.old_parking_distance,
      newFloorNo: eachItem.new_floor_no,
      newElevatorAvailability: eachItem.new_elevator_availability,
      newParkingDistance: eachItem.new_parking_distance,
      inventory: eachItem.items.inventory,
    }))
    console.log(eachMoveData)
    this.setState({movesData: eachMoveData})
  }

  render() {
    const {movesData, specificItems, viewDetails} = this.state
    return (
      <>
        <div className="mymoves_details">
          <h1> My Moves </h1>
          <div>
            {movesData.map(eachItem => (
              <MoveItem
                moveDetail={eachItem}
                key={eachItem.userId}
                viewDetails={viewDetails}
                toggleViewDetails={this.toggleViewDetails}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}
export default MyMoves
