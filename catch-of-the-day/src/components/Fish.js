import React from 'react';
import {formatPrice} from "../helpers";

class Fish extends React.Component{
  render(){
    const { details, index } = this.props;
    // ^^^ here we're setting variables like thing as things in thing.item.stuff in angular
    // want to add a button that changes based on availablity
    // when state changes, DOM is updated
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';
    return (
      <div>
        <li className="menu-fish">
          <img src={details.image} alt="fish"/>
          <h3>
            {details.name}
            <span className="price">{formatPrice(details.price)}</span>
          </h3>
          <p> {details.desc}</p>
          <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
        </li>
      </div>
    )
  }
}

export default Fish;
