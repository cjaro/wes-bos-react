import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{
  constructor(){
    super();

    this.addFish = this.addFish.bind(this);
    //getInitialState
    this.state={
      fishes: {},
      order: {}
    }
  }

  addFish(fish){
    //update state
    // could do something like this.state.fishes.fish1 = fish;
    //but this is better...
    const fishes = {...this.state.fishes};
    //add new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({fishes: fishes})
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
