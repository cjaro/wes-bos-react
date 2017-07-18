import React from 'react';

import AddFishForm from './AddFishForm';

// in app.js, it's addFish={this.addFish}
// NOTE but here, it's addFish={this.props.addFish}
// props is how you pass things down to this addFish function
class Inventory extends React.Component{
  // comment is for button, since React comments are wack
  // it's not this.loadSamples because loadSamples doesn't live here
  // loadSamples lives where our state lives, up in App.js
  // see there: now we're passing down via props in the button onClick
  render(){
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
