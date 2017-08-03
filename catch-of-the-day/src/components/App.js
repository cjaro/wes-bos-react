import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component{
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    //getInitialState
    this.state={
      fishes: {},
      order: {}
    }
  }

  addFish(fish){
    // update state
    // could do something like this.state.fishes.fish1 = fish;
    // but this is better...
    const fishes = {...this.state.fishes};
    // this.state.fishes is existing dishes state// gonna take each existing fish
    // and put into new state
    // ... is a spread - takes every item from an object and spread it into new object
    // then add new fish
    // timestamp gives unique and incremental ID
    // milliseconds since 1 January 1970
    const timestamp = Date.now();
    // pass fish object from AddFishForm to this method
    fishes[`fish-${timestamp}`] = fish;
    // now we have this object of updated fish but it's not yet being set to our actual state
    // React doens't just sit and watch the entire state and update as you go
    // you have explicitly tell React which state to update
    // 'fishes' state has changed, here is new one: we'll put it in a variable called fishes
    // anytime you change something, React finds instances of that state and changes it accordingly
    this.setState({fishes: fishes})
  }

// state lives up here so let's make a new function
// calling this.setState just like we did above
// import sampleFishes from sample-fishes.js
// pass to 'loadSamples' setState method
// in order to use this inside any of the methods we've made, we have to:
// this.loadSamples = this.loadSamples.bind(this); on line 11
// how do we bring this downstream to our inventory?
// pass via props!
  loadSamples(){
    this.setState({
      fishes: sampleFishes
    });
  }

  // add to order method, takes in a key
  addToOrder(key){
    //take a copy of our state
    // object spread takes copy of existing order state
    const order = {...this.state.order};
    //update or add new number of fish orders
    // the or operator - adds to existing, or a new one
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({
      order: order
    });
  }

  // we have this fish object, how do we swim upstream to app.js?
  // this is where props come in
  // how do I call addFish from a child component a couple levels deep?
  // go to this inventory component and do addFish={this.addFish}
  // okay now
  // Object.keys(this.state.fishes).map(key => <Fish/>)
  // map is for an array, we have an object
  // wrap object in Object.keys returns an array (keys/propoerty names) object
  // map over that - wya to loop over an array of stuff and return second array
  // now we have all these identitcal componetns (looking in chrome dev tools)
  // React doesn't like - wants to know how it can update one specific
  // key={key} sets unique key for each repeated element
  // need to get one fish, pass all data about it to our fish
  // pass via details prop --  details={this.state.fishes[key]}
  // now as we're trying to access the key in order to add different fish
  // we don't touch key
  // key is NO FO YOU iz fo INDEX
  // make 'index' prop instead that we're making up
  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
          <ul className="list-of-fishes">
            {
              Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;
