import {Component} from 'react'
import './index.css'
import Additional from '../Additional'

class MoveItem extends Component {
  state = {
    viewOpen: false,
  }

  changeViewDetails = () => {
    this.setState(prevState => ({viewOpen: !prevState.viewOpen}))
  }

  render() {
    const {viewOpen} = this.state
    const {moveDetail, toggleViewDetails, viewDetails} = this.props
    const {
      movingFrom,
      movingOn,
      movingTo,
      distance,
      totalItems,
      propertySize,
      userId,
    } = moveDetail
    return (
      <>
        <div className="firstrow">
          <div>
            <p> From </p>
            <p> {movingFrom} </p>
          </div>
          <div>
            <p>></p>
          </div>
          <div>
            <p> To </p>
            <p> {movingTo} </p>
          </div>
          <div>
            <p> Request#</p>
            <p> {userId} </p>
          </div>
        </div>

        <div className="firstrow">
          <div>
            <p>Property Size</p>
            <p> {propertySize} </p>
          </div>
          <div>
            <p>Total Items</p>
            <p> {totalItems} </p>
          </div>
          <div>
            <p>Distance</p>
            <p> {distance} </p>
          </div>
          <div>
            <p>Moving On</p>
            <p> {movingOn} </p>
          </div>

          <div>
            <p> Is Flexible </p>
          </div>
          <div>
            <button onClick={this.changeViewDetails}>
              {' '}
              View move details{' '}
            </button>
            <button> Quotes Awaiting </button>
          </div>
        </div>
        <div>
          <p>
            {' '}
            Disclaimer : Please update your move date before two days of
            shifting{' '}
          </p>
        </div>
        <hr />
        {viewOpen ? (
          <div>
            <Additional moveDetail={moveDetail} />
          </div>
        ) : null}
      </>
    )
  }
}
export default MoveItem
